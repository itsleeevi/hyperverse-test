# Get Current Tribe

<p> The `getCurrentTribe` function from **Flow Tribes Module** returns the current tribe a tenant has joined. </p>

---

<br>

### getCurrentTribe

<p> The `getCurrentTribe` function takes in the tenant ID and the account address. </p>

```jsx
const fcl = require('@onflow/fcl');
const t = require('@onflow/types');
import { TribesData } from '..';

async function getCurrentTribe(tenantId: string, accountAddress: string) {
	try {
		const allTribes = await fcl
			.send([
				fcl.script`
      import Tribes from 0xTribes
          
      pub fun main(tenantID: Address, accountAddress: Address): {String: String}? {
                              
          let identity = getAccount(accountAddress).getCapability(Tribes.IdentityPublicPath)
                                      .borrow<&Tribes.Identity{Tribes.IdentityPublic}>()
                                      ?? panic("Could not get the Identity.")
      
          let tribe = identity.currentTribeName(tenantID)
      
          if tribe == nil {
              return nil
          }
      
          let returnObject: {String: String} = {}
          let tenantData = Tribes.getTribeData(tenantID, tribeName: tribe!)
          returnObject["name"] = tribe
          returnObject["ipfsHash"] = tenantData.ipfsHash
          returnObject["description"] = tenantData.description
      
          return returnObject
      }
      `,
				fcl.args([fcl.arg(tenantId, t.Address), fcl.arg(accountAddress, t.Address)]),
			])
			.then(fcl.decode);

		return allTribes as TribesData;
	} catch (error) {
		console.error(error);
	}
}

export { getCurrentTribe };
```

### Stories

```jsx

```

### Main UI Component

```jsx

```

### Args

```jsx

```

For more information about our modules please visit: [**Hyperverse Docs**](https://docs.hyperverse.dev)
