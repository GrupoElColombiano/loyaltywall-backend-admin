export declare class RegisterLog {
    id: number;
    userId: string;
    roleId: string;
    activityType: string;
    description: string;
    affectedObject: string;
    success: boolean;
    ipAddress: string;
    userAgent: string;
    timestamp: Date;
    error: Record<string, any>;
    url: string;
    token: string;
}
