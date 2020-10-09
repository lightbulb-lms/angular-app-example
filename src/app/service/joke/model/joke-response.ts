export interface JokeResponse {
  error: boolean;
  category: string;
  type: string;
  setup: string;
  delivery: string;
  flags: JokeResponseFlags;
  id: number;
  lang: string;
}

interface JokeResponseFlags {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
}
