# Changelog

## 2.0.0 (2026-02-07)

Full Changelog: [v1.0.0...v2.0.0](https://github.com/stainless-api/dbahn-stations-typescript/compare/v1.0.0...v2.0.0)

### ⚠ BREAKING CHANGES

* **mcp:** remove deprecated tool schemes
* **mcp:** **Migration:** To migrate, simply modify the command used to invoke the MCP server. Currently, the only supported tool scheme is code mode. Now, starting the server with just `node /path/to/mcp/server` or `npx package-name` will invoke code tools: changing your command to one of these is likely all you will need to do.

### Features

* **mcp:** add initial server instructions ([404f701](https://github.com/stainless-api/dbahn-stations-typescript/commit/404f70142a74dd6b4f2b628fb045d62e9aed2457))


### Bug Fixes

* **client:** avoid memory leak with abort signals ([15220f6](https://github.com/stainless-api/dbahn-stations-typescript/commit/15220f697311b126c51073a832c03ed492e35dea))
* **client:** avoid removing abort listener too early ([a730940](https://github.com/stainless-api/dbahn-stations-typescript/commit/a730940815acf848e002f49e869889b9dd23b5e7))
* **client:** invalid URL ([a3aec3c](https://github.com/stainless-api/dbahn-stations-typescript/commit/a3aec3cd64114525e15853eeaef11b4d30d98635))
* **docs:** fix mcp installation instructions for remote servers ([46642b3](https://github.com/stainless-api/dbahn-stations-typescript/commit/46642b34b64638db75b4a9802eb55f0733da3c14))
* flag defaults ([34e42cf](https://github.com/stainless-api/dbahn-stations-typescript/commit/34e42cf35f7379b77359c7e1e3b75583bf005beb))
* **mcp:** add client instantiation options to code tool ([2c97467](https://github.com/stainless-api/dbahn-stations-typescript/commit/2c97467cdf125cca76da2ad7886312cc19232fec))
* **mcp:** allow falling back for required env variables ([c9dd289](https://github.com/stainless-api/dbahn-stations-typescript/commit/c9dd2897a16622685980115ed4f06fc9ffd98319))
* **mcp:** correct code tool api output types ([b344bbb](https://github.com/stainless-api/dbahn-stations-typescript/commit/b344bbbbe2c5360e6edf8b07faaa1da12595fb21))
* **mcp:** fix env parsing ([73421a2](https://github.com/stainless-api/dbahn-stations-typescript/commit/73421a26d60f387d37117a48efbae074a666905a))
* **mcp:** fix options parsing ([10e29cb](https://github.com/stainless-api/dbahn-stations-typescript/commit/10e29cba837bf22972c58c8e3907722992ed68cd))
* **mcp:** pass base url to code tool ([3f15efc](https://github.com/stainless-api/dbahn-stations-typescript/commit/3f15efc011e9124609085a482305f3d812e8559f))
* **mcp:** update code tool prompt ([8450e52](https://github.com/stainless-api/dbahn-stations-typescript/commit/8450e5228ac4d329fea367f4b67d5eed380fd51c))


### Chores

* **ci:** upgrade `actions/github-script` ([d8404ed](https://github.com/stainless-api/dbahn-stations-typescript/commit/d8404ede3149db30d84be409df10658c49b0439a))
* **client:** do not parse responses with empty content-length ([c44f4f4](https://github.com/stainless-api/dbahn-stations-typescript/commit/c44f4f42fc6c59a9d1c57df87341b56075ef5ae0))
* **client:** restructure abort controller binding ([2a61d94](https://github.com/stainless-api/dbahn-stations-typescript/commit/2a61d9483934a76da6d7d2ae1bfc5d7538b8c0cf))
* **internal:** add health check to MCP server when running in HTTP mode ([2680d1e](https://github.com/stainless-api/dbahn-stations-typescript/commit/2680d1e4402b03ef8b44d55e538cc6d8c38972ae))
* **internal:** bump MCP dependencies ([1b4a26c](https://github.com/stainless-api/dbahn-stations-typescript/commit/1b4a26cb0fe9dcbf97383a360c1a78fceb04b250))
* **internal:** codegen related update ([8019663](https://github.com/stainless-api/dbahn-stations-typescript/commit/8019663aa390be140f354b98bcf5a2ae322ccefe))
* **internal:** codegen related update ([b8540a6](https://github.com/stainless-api/dbahn-stations-typescript/commit/b8540a6aa803ea9147bf72f561c5c102901c300e))
* **internal:** codegen related update ([6fb6547](https://github.com/stainless-api/dbahn-stations-typescript/commit/6fb65477636d58e7a45bff39bccdeaea7bd29581))
* **internal:** codegen related update ([b47beac](https://github.com/stainless-api/dbahn-stations-typescript/commit/b47beac7e443add408fb4b53b1ede05861821b2d))
* **internal:** codegen related update ([016fde7](https://github.com/stainless-api/dbahn-stations-typescript/commit/016fde77a1d4a58e09a0d641e2120a3837a4a76f))
* **internal:** codegen related update ([77aa5c7](https://github.com/stainless-api/dbahn-stations-typescript/commit/77aa5c7dff2f32b35c112c46ad26c4830c9c0182))
* **internal:** fix dockerfile ([bfeafda](https://github.com/stainless-api/dbahn-stations-typescript/commit/bfeafda3e78a5c47ca53d014b46abbda54e18921))
* **internal:** refactor flag parsing for MCP servers and add debug flag ([2f40d74](https://github.com/stainless-api/dbahn-stations-typescript/commit/2f40d7469e7741571d28d71afb5e83595908a858))
* **internal:** support oauth authorization code flow for MCP servers ([274116b](https://github.com/stainless-api/dbahn-stations-typescript/commit/274116bfbe6fe68a42c6142e49ce5d93b5762edb))
* **internal:** update `actions/checkout` version ([d01bb6a](https://github.com/stainless-api/dbahn-stations-typescript/commit/d01bb6a03494910e6673a4de80182f38c0826f5b))
* **internal:** update lock file ([01f2505](https://github.com/stainless-api/dbahn-stations-typescript/commit/01f2505223b1664d0c77cb89d0abbaafd9ea73bf))
* **internal:** upgrade babel, qs, js-yaml ([73beaee](https://github.com/stainless-api/dbahn-stations-typescript/commit/73beaeefe7f902d011768d5ad0bc77dcaaae5ed0))
* **internal:** upgrade brace-expansion and @babel/helpers ([6b9def9](https://github.com/stainless-api/dbahn-stations-typescript/commit/6b9def97f74248695ff8739b70756a909bf6721f))
* **internal:** upgrade pnpm ([3867161](https://github.com/stainless-api/dbahn-stations-typescript/commit/3867161c4052c12c3e301ee9bf7fef9f34820299))
* **mcp:** add intent param to execute tool ([60e8bb4](https://github.com/stainless-api/dbahn-stations-typescript/commit/60e8bb4cd21b8b535b97307b57dabec592aa1b8f))
* **mcp:** pass intent param to execute handler ([ec41ce1](https://github.com/stainless-api/dbahn-stations-typescript/commit/ec41ce1e3d34b554eccf4c3f54de28cb44f95780))
* **mcp:** remove deprecated tool schemes ([c9bdea6](https://github.com/stainless-api/dbahn-stations-typescript/commit/c9bdea6067ce2b1b0c6c57405401807fe9ef9b83))
* **mcp:** up tsconfig lib version to es2022 ([1d7c52a](https://github.com/stainless-api/dbahn-stations-typescript/commit/1d7c52a316845d6f449ee938ff442c6a00438d13))
* **mcp:** upgrade dependencies ([fffa085](https://github.com/stainless-api/dbahn-stations-typescript/commit/fffa085263a0c0c4175c16a8ca175a74a2efcc38))


### Documentation

* prominently feature MCP server setup in root SDK readmes ([0f92331](https://github.com/stainless-api/dbahn-stations-typescript/commit/0f92331de20006a2d3dbbffa8f06eb47464ee778))

## 1.0.0 (2025-12-10)

Full Changelog: [v0.0.1...v1.0.0](https://github.com/stainless-api/dbahn-stations-typescript/compare/v0.0.1...v1.0.0)

### Features

* **mcp:** add typescript check to code execution tool ([eff235b](https://github.com/stainless-api/dbahn-stations-typescript/commit/eff235b644c69ca3f28dec4d47b142188c6f1642))
* **mcp:** handle code mode calls in the Stainless API ([d892d76](https://github.com/stainless-api/dbahn-stations-typescript/commit/d892d7609e3fd1f0a5b94229395a2aeaabf372f6))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([3995f04](https://github.com/stainless-api/dbahn-stations-typescript/commit/3995f04594ea100bb3a3161b8ecb88a004d87cc1))
* **mcp:** return correct lines on typescript errors ([3dfff0a](https://github.com/stainless-api/dbahn-stations-typescript/commit/3dfff0a91b64fa8835eabc7e37fc89a28c59da24))


### Chores

* configure new SDK language ([63460e8](https://github.com/stainless-api/dbahn-stations-typescript/commit/63460e81f47218742406a42195bea4083eff713b))
* **internal:** codegen related update ([a9a23ed](https://github.com/stainless-api/dbahn-stations-typescript/commit/a9a23edd001ad74d76e181d207c073770b484947))
* **internal:** codegen related update ([7a093ef](https://github.com/stainless-api/dbahn-stations-typescript/commit/7a093ef2a26b0593684fd477c8f4c02f1a15f3b0))
* **internal:** configure MCP Server hosting ([005cd72](https://github.com/stainless-api/dbahn-stations-typescript/commit/005cd72e94fee7114297a5da4841271474e038e5))
* **internal:** configure pnpm minimumReleaseAge to 1 day ([62740a2](https://github.com/stainless-api/dbahn-stations-typescript/commit/62740a2d74a9e25ff27a7c8175ccfa90fab5bda1))
* update SDK settings ([f1f08bf](https://github.com/stainless-api/dbahn-stations-typescript/commit/f1f08bf94b80aa8e115785bb3ec8bf6df79b6b12))
* update SDK settings ([914fb2e](https://github.com/stainless-api/dbahn-stations-typescript/commit/914fb2eae98add15b5c2e58971b59130c2e346d1))
* use latest @modelcontextprotocol/sdk ([9f606ca](https://github.com/stainless-api/dbahn-stations-typescript/commit/9f606ca09313d0ad58f3868e80a1609fb45206a4))
