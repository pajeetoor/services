// WebSocket Connection
WS /sanchar

// Message Format
{
  prakaar: string; // type
  samayChinh: number; // timestamp
  data: {
    vartalapId?: string; // conversationId
    sandesh?: {
      vishay: string; // content
      karyakartaNaam: string; // agentName
      karyakartaBhoomika: string; // agentRole
      samayChinh: number; // timestamp
    };
    sthaan?: string; // location
    gatividhi?: string; // activity
  }
}
