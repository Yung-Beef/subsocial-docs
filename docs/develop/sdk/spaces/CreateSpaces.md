---
id: create-spaces
title: Create And Update Spaces
displayed_sidebar: developSidebar
---
import IFrameViewer from '@site/src/components/IframeComponent';

**This section covers how to create and update spaces on the Subsocial blockchain.**

## Create A Space

```
substrateApi.tx.spaces.createSpace(content, permissionsOpt)
```


| Params    | Description |
| ----------- | ----------- |
| _content_ |  [IpfsContent](https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/substrate/wrappers/content.ts#L29) is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}. |
| _permissions_ |  advanced options. |

Example: 

```typescript
import { IpfsContent } from "@subsocial/api/substrate/wrappers"
...
const cid = await api.ipfs.saveContent({
  about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',
  image: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', // ipfsImageCid = await api.subsocial.ipfs.saveFile(file)
  name: 'Subsocial',
  tags: [ 'subsocial' ]
})

const tx = substrateApi.tx.spaces.createSpace(
  IpfsContent(cid),
  null
)
...
```

 <IFrameViewer
      src="https://play.subsocial.network/writing-data/space/create?iframe=true"
  />

## Update A Space

```
substrateApi.tx.spaces.updateSpace(spaceId: AnySpaceId, update: SpaceUpdateType)
```

| Params    | Description |
| ----------- | ----------- |
| _spaceId_ | ID of the current space. |
| _update_ |  fields available to be updated. |

**Update properties**

| Properties    | Description |
| ----------- | ----------- |
| _content_? | [IpfsContent](https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/substrate/wrappers/content.ts#L29) is a function that returns a substrate like implementation for enum { IPFS: "CID of your content"}.|
| _hidden_? | boolean, if space is hidden from other users. |
| _permissions_? | advance opt. |

Example: 

```typescript
import {
  IpfsContent, 
  OptionBool,
} from "@subsocial/api/substrate/wrappers"

...
const cid = await api.ipfs.saveContent({
  about: 'Subsocial is an open protocol for decentralized social networks and marketplaces. It`s built with Substrate and IPFS',
  image: 'Qmasp4JHhQWPkEpXLHFhMAQieAH1wtfVRNHWZ5snhfFeBe', 
  name: 'Subsocial updated', // updated field
  tags: ['subsocial']
})

const update = {
  content: IpfsContent(cid),
  hidden: new OptionBool(true),
}
      
const tx = substrateApi.tx.spaces.updateSpace('1', update)
...
```

 <IFrameViewer
      src="https://play.subsocial.network/writing-data/space/update?iframe=true"
  />

## Space Permissions

**Note:** Blockchains by nature are public and transparent, which means that anyone can read any data you store in these spaces. To hide it from people, you can to encrypt the data from your end. 

| Type    | Description |
| ----------- | ----------- |
| none | Read-Only Content |
| everyone | Everyone can write. |
| follower | Only the space followers can write. |
| spaceOwner | Only the space owner can write. |

Writing includes both updating the space data and adding new posts to a particular space.

The way you can set permissions is:

```js
  const tx = substrateApi.tx.spaces.createSpace(IpfsContent(cid), {follower: true})
```
    

> 🆃 [AnySpaceId](https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/common.ts#L39)

> 🆃 [SpaceUpdateType](https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/substrate/wrappers/space-update.ts#L5): { content: [_SpaceContent_](https://github.com/dappforce/subsocial-js/blob/master/packages/api/src/types/ipfs.ts#L16), handle: string, hidden: _Option_<_bool_>, permissions: _Option_<_Option_<_SpacePermissions_ (none, everyone, follower, space_owner)>> }  
