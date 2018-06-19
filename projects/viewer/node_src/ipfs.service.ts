import * as IPFS from 'ipfs';
import * as request from 'request';
import {Observable, throwError} from 'rxjs';
import {electronEnvironment} from './environment';

export class IpfsService {
  node: IPFS;
  muzikaPeers: string[] = [];
  isReady = false;

  constructor() {
  }

  init() {
    this.node = new IPFS({
      repo: 'ipfs-muzika',
      config: {
        Addresses: {
          Swarm: [
            '/ip4/0.0.0.0/tcp/4004/ws',
          ]
        },
        'EXPERIMENTAL': {
          'relay': {
            'enabled': true,
            'hop': {
              'enabled': true
            }
          }
        },
        Swarm: {
          DisableRelay: false,
          EnableRelayHop: true
        }
      }
    });

    // if ipfs node generated, connect to a remote storage for speeding up file exchange.
    this.node.on('ready', () => {
      // get IPFS nodes list
      request.get({
          url: `${electronEnvironment.base_api_url}/seed/ipfs`,
          json: true
        },
        (error, response, body) => {
          if (!error) {
            for (const ipfsNode of body) {
              this.node.swarm.connect(ipfsNode.ID, (err) => {
                if (err) {
                  console.log(err);
                }
                // if one of the IPFS is connected, ready status to true
                this.muzikaPeers.push(ipfsNode.APIServer);
                this.isReady = true;
              });
            }
          } else {
            console.error('Not connected with muzika-platform-server..');
          }
        }
      );
    });
  }

  sub(arg) {
    return Observable.create(observer => {
      this.node.pubsub.subscribe(arg, {discover: true}, (msg) => {
        observer.next(msg.data);
      });
    });
  }

  pub(arg, msg) {
    this.node.pubsub.publish(arg, new this.node.types.Buffer(msg));
  }

  addresses(): Observable<Array<string>> {
    return Observable.create(observer => {
      this.node.id((err, identity) => {
        if (err) {
          throw err;
        }
        observer.next(identity.addresses);
        observer.complete();
      });
    });
  }

  connectPeer(peer) {
    this.node.swarm.connect(peer, (err) => {
      if (err) {
        console.log('Cannot connect to ' + peer);
        return;
      }
    });
  }

  peers() {
    return Observable.create(observer => {
      this.node._libp2pNode.on('peer:connect', peer => {
        this.node.swarm.peers((err, peerInfos) => {
          if (err) {
            throw err;
          }
        });
        observer.next(peer);
      });
    });
  }

  id() {
    return Observable.create(observer => {
      this.node.id((err, identity) => {
        if (err) {
          throw err;
        }
        observer.next(identity);
        observer.complete();
      });
    });
  }

  put(uploadQueue): Promise<any> {
    return new Promise((resolve, reject) => {
      this.node.files.add(uploadQueue, (err, result) => {
        if (err) {
          return reject(err);
        }

        return resolve(result);
      });
    });
  }

  get(hash): Promise<void> {
    return new Promise((resolve, reject) => {
      this.node.files.get(hash, (err, files) => {
        if (err) {
          return reject(err);
        }

        return resolve(files);
      });
    });
  }

  getRandomPeer() {
    return this.muzikaPeers[Math.floor(Math.random() * this.muzikaPeers.length)];
  }
}

export const IpfsServiceInstance = new IpfsService();
