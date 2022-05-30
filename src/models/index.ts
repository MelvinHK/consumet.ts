import BaseProvider from './base-provider';
import BaseParser from './base-parser';
import AnimeParser from './anime-parser';
import BookParser from './book-parsers';
import VideoExtractor from './video-extractor';
import {
  IProviderStats,
  IAnimeSearch,
  IAnimeEpisode,
  IAnimeInfo,
  IAnimeResult,
  IEpisodeServer,
  IVideo,
  LibgenBook,
  Servers,
} from './types';
import { LibgenBookObject } from './type-classes';

export {
  BaseProvider,
  IProviderStats,
  BaseParser,
  AnimeParser,
  BookParser,
  IAnimeSearch,
  IAnimeEpisode,
  IAnimeInfo,
  IAnimeResult,
  IEpisodeServer,
  IVideo,
  VideoExtractor,
  LibgenBook,
  LibgenBookObject,
  Servers,
};
