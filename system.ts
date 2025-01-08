// Mukhya Agent Prakaar
interface Agent {
  pehchaan: string;  // "id"
  naam: string;      // "name"
  bhoomika: string;  // "role"
  swabhav: string;   // "personality"
  zilaPehchaan: string;  // "districtId"
}

// Agent Baatcheet Prabandhan
interface AgentBaatcheetSeva {  // "AgentConversationService"
  nayiBaatcheetShuruKare(
    agentIds: string[],
    sandarbh: BaatcheetSandarbh  // "context"
  ): Promise<Baatcheet>;

  upbhoktaSandeshHandleKare(
    baatcheetId: string,  // "conversationId"
    sandesh: string       // "message"
  ): Promise<void>;
}
