interface Options {
  title: string;
}

export interface ScreenOption {
  name: string;
  component: FC;
  options?: Options;
}