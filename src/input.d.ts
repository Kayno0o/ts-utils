/** @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete */
export type InputAutocompleteType =
  | 'on'
  | 'name'
  | 'honorific-prefix'
  | 'given-name'
  | 'aditional-name'
  | 'family-name'
  | 'honorific-suffix'
  | 'nickname'
  | 'email'
  | 'username'
  | 'new-password'
  | 'current-password'
  | 'one-time-code'
  | 'organization-title'
  | 'organization'
  | 'street-address'
  | 'shipping'
  | 'billing'
  | 'address-line1'
  | 'address-line2'
  | 'address-line3'
  | 'address-level4'
  | 'address-level3'
  | 'address-level2'
  | 'address-level1'
  | 'country'
  | 'country-name'
  | 'postal-code'
  | 'cc-name'
  | 'cc-given-name'
  | 'cc-additional-name'
  | 'cc-family-name'
  | 'cc-number'
  | 'cc-exp'
  | 'cc-exp-month'
  | 'cc-exp-year'
  | 'cc-csc'
  | 'cc-type'
  | 'transaction-currency'
  | 'transaction-amount'
  | 'language'
  | 'bday'
  | 'bday-day'
  | 'bday-month'
  | 'bday-year'
  | 'sex'
  | 'tel'
  | 'tel-country-code'
  | 'tel-national'
  | 'tel-area-code'
  | 'tel-local'
  | 'tel-local-prefix'
  | 'tel-local-suffix'
  | 'tel-extension'
  | 'impp'
  | 'url'
  | 'photo'
  | 'webauthn'

/** @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types */
export type DocumentMimeType =
  | 'application/*'
  | 'application/msword'
  | 'application/octet-stream'
  | 'application/ogg'
  | 'application/pdf'
  | 'application/rtf'
  | 'application/vnd.amazon.ebook'
  | 'application/vnd.apple.installer+xml'
  | 'application/vnd.mozilla.xul+xml'
  | 'application/vnd.ms-excel'
  | 'application/vnd.ms-fontobject'
  | 'application/vnd.ms-powerpoint'
  | 'application/vnd.oasis.opendocument.presentation'
  | 'application/vnd.oasis.opendocument.spreadsheet'
  | 'application/vnd.oasis.opendocument.text'
  | 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  | 'application/vnd.visio'
  | 'application/x-7z-compressed'
  | 'application/x-abiword'
  | 'application/x-cdf'
  | 'application/x-csh'
  | 'application/x-freearc'
  | 'application/x-httpd-php'
  | 'application/x-sh'

export type TextDataMimeType =
  | 'application/atom+xml'
  | 'application/json'
  | 'application/ld+json'
  | 'application/xhtml+xml'
  | 'application/xml'

export type ArchiveMimeType =
  | 'application/epub+zip'
  | 'application/gzip'
  | 'application/java-archive'
  | 'application/vnd.rar'
  | 'application/x-bzip'
  | 'application/x-bzip2'
  | 'application/x-tar'
  | 'application/zip'

export type AudioMimeType =
  | 'audio/*'
  | 'audio/3gpp'
  | 'audio/3gpp2'
  | 'audio/aac'
  | 'audio/midi'
  | 'audio/mpeg'
  | 'audio/ogg'
  | 'audio/opus'
  | 'audio/wav'
  | 'audio/webm'
  | 'audio/x-midi'

export type FontMimeType =
  | 'font/*'
  | 'font/otf'
  | 'font/ttf'
  | 'font/woff'
  | 'font/woff2'

export type ImageMimeType =
  | 'image/*'
  | 'image/apng'
  | 'image/avif'
  | 'image/bmp'
  | 'image/gif'
  | 'image/jpeg'
  | 'image/png'
  | 'image/svg+xml'
  | 'image/tiff'
  | 'image/vnd.microsoft.icon'
  | 'image/webp'

export type TextMimeType =
  | 'text/*'
  | 'text/calendar'
  | 'text/css'
  | 'text/csv'
  | 'text/html'
  | 'text/javascript'
  | 'text/javascript'
  | 'text/plain'
  | 'text/xml'

export type VideoMimeType =
  | 'video/*'
  | 'video/3gpp'
  | 'video/3gpp2'
  | 'video/mp2t'
  | 'video/mp4'
  | 'video/mpeg'
  | 'video/ogg'
  | 'video/webm'
  | 'video/x-msvideo'

export type MimeType = DocumentMimeType | TextDataMimeType | ArchiveMimeType | AudioMimeType | FontMimeType | ImageMimeType | TextMimeType | VideoMimeType
type Extension = `.${string}`

export type InputAccept = MimeType | Extension