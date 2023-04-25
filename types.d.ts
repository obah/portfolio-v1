type MotionParameters = {
  initial: {
    opacity: number;
    y?: number;
  };
  animate: {
    opacity: number;
    y?: number;
    transition: {
      delay?: number;
      duration?: number;
      staggerChildren?: number;
    };
  };
};

type IState = {
  isOpen: boolean;
  type: string;
  message: string;
};

type ContextValue =
  | {
      state?: IState;
      onOpen: (type: string, message: string) => void;
      onClose: () => void;
    }
  | undefined;
