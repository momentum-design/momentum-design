type ValidTextTags =
    | 'a' | 'abbr' | 'address' | 'article' | 'aside'
    | 'b' | 'bdi' | 'bdo' | 'blockquote' | 'br'
    | 'cite' | 'code' | 'data' | 'del' | 'dfn'
    | 'em' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    | 'h6' | 'i' | 'img' | 'ins' | 'kbd'
    | 'mark' | 'meter' | 'noscript' | 'p'
    | 'pre' | 'q' | 'rp' | 'rt' | 'ruby'
    | 's' | 'samp' | 'small' | 'span'
    | 'strong' | 'sub' | 'sup'
    | 'time' | 'u';

export function isValidTag(tagName: string): tagName is ValidTextTags {
  return (tagName.toLowerCase() as ValidTextTags) !== undefined;
}
