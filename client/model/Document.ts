import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

type Document = Parameters<typeof documentToReactComponents>[0]

export default Document;