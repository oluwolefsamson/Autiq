export type DashboardLead = {
    _id: string;
    name: string;
    email: string;
    source?: string;
    status?: string;
    notes?: string;
    createdAt?: string;
};

export type DashboardConversation = {
    _id: string;
    visitorId: string;
    channel?: string;
    status?: string;
    summary?: string;
    updatedAt?: string;
};

export type DashboardAnalytics = {
    conversations: number;
    leadsCaptured: number;
    answerRate: number;
    satisfactionScore: number;
};
