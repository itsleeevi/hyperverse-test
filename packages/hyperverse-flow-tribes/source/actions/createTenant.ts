const fcl = require('@onflow/fcl');
const t = require('@onflow/types');
import { FlowTransaction } from '..';

async function createTenant() {
	try {
		const transactionID = await fcl
			.send([
				fcl.transaction`
      import Tribes from 0xTribes
      
      transaction() {
          prepare(signer: AuthAccount) {
              Tribes.createTenant(newTenant: signer)
          }
          execute {
              
          }
      }
      `,
				fcl.args([]),
				fcl.payer(fcl.authz),
				fcl.proposer(fcl.authz),
				fcl.authorizations([fcl.authz]),
				fcl.limit(9999),
			])
			.then(fcl.decode);

		return fcl.tx(transactionID).onceSealed() as Promise<FlowTransaction>;
	} catch (error) {
		console.error(error);
	}
}

export { createTenant };
