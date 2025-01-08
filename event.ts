// Event Types
type SevaAIEvent = {
  // Gyaan Prakash (Pattern Recognition Events)
  "gyan:prakash": {
    naksha: string;
    bharosa: number;
    sandarbh: Record<string, any>;
  };

  // Nirnay Ghatnaayein (Decision Events)
  "nirnay:liya": {
    sevakId: string;
    nirnay: string;
    sandarbh: Record<string, any>;
    bharosa: number;
  };

  // Seekhne Ki Ghatnaayein (Learning Events)
  "seekhna:unnati": {
    sevakId: string;
    maap: string;
    sudhar: number;
  };

  // Truti Ghatnaayein (Error Events)
  "seva:truti": {
    prakaar: string;
    sandesh: string;
    sandarbh: Record<string, any>;
  };
};
