// Real-time communication system
interface SamparkData {
  banayaAt: number;  // "createdAt"
  url: string;
  sandeshItihas: Map<string, { content: string; timestamp: number }>;  // "messageHistory"
  sakriyaBaatcheet: Set<string>;  // "activeConversations"
}

// Message Types
type SamparkSandesh = {  // "WebSocketMessage"
  prakaar: "agent_baatcheet" | "system_sandesh" | "daan_pratikriya";  // "type" | "donation_reaction"
  samay: number;  // "timestamp"
  data: any;
};
