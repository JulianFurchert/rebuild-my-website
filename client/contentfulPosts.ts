import * as contentful from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = contentful.createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries({ 
    'content_type':'item',
  })
  if (entries) return entries
  console.log(`Error getting Entries for.`)
}

export async function fetchEntriesWithIds(id: string[]) {
  const entries = await client.getEntries({ 
    'content_type':'item',
    'fields.tags.sys.id': id,
    'fields.tags.sys.id[all]': id.join()
  })
  if (entries) return entries
  console.log(`Error getting Entries for.`)
}

export default { fetchEntries }