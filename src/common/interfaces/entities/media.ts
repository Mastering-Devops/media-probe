import { IMediaMetadata } from './media-metadata';

export interface IMedia {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  'media-metadata': IMediaMetadata[];
}
