pub contract HelloWorld {

    pub let TenantStoragePath: StoragePath

    access(contract) var hellos: {Address: String}

    pub resource Tenant {
        pub fun changeHello(newHello: String) {
            HelloWorld.hellos[self.owner!.address] = newHello
        }
    }

    pub fun createTenant(): @Tenant {
        return <- create Tenant()
    }

    pub fun sayHello(_ tenant: Address): String? {
        return self.hellos[tenant]
    }

    init() {
        self.hellos = {}
        self.TenantStoragePath = /storage/HelloWorldTenant
    }
}
 