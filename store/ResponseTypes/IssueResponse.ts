
export interface Priority {
        self: string;
        iconUrl: string;
        name: string;
        id: string;
    }

export interface AvatarUrls {
        LSize: string;
        MSize: string;
        SSize: string;
        XSSize: string;
    }

export interface Assignee {
        self: string;
        accountId: string;
        avatarUrls: AvatarUrls;
        displayName: string;
        active: boolean;
        timeZone: string;
        accountType: string;
    }

export interface StatusCategory {
        self: string;
        id: number;
        key: string;
        colorName: string;
        name: string;
    }

export interface Status {
        self: string;
        description: string;
        iconUrl: string;
        name: string;
        id: string;
        statusCategory: StatusCategory;
    }

export interface Creator {
        self: string;
        accountId: string;
        avatarUrls: AvatarUrls;
        displayName: string;
        active: boolean;
        timeZone: string;
        accountType: string;
    }

export interface Reporter {
        self: string;
        accountId: string;
        avatarUrls: AvatarUrls;
        displayName: string;
        active: boolean;
        timeZone: string;
        accountType: string;
    }

export interface Aggregateprogress {
        progress: number;
        total: number;
    }

export interface Progress {
        progress: number;
        total: number;
    }

export interface Votes {
        self: string;
        votes: number;
        hasVoted: boolean;
    }

export interface Issuetype {
        self: string;
        id: string;
        description: string;
        iconUrl: string;
        name: string;
        subtask: boolean;
        avatarId: number;
        hierarchyLevel: number;
    }

export interface Project {
        self: string;
        id: string;
        key: string;
        name: string;
        projectTypeKey: string;
        simplified: boolean;
        avatarUrls: AvatarUrls;
    }

export interface Watches {
        self: string;
        watchCount: number;
        isWatching: boolean;
    }

export interface Fields {
    statuscategorychangedate: Date;
    priority: Priority;
    labels: any[];
    aggregatetimeoriginalestimate?: any;
    timeestimate?: any;
    versions: any[];
    issuelinks: any[];
    assignee: Assignee;
    status: Status;
    components: any[];
    aggregatetimeestimate?: any;
    creator: Creator;
    subtasks: any[];
    reporter: Reporter;
    aggregateprogress: Aggregateprogress;
    progress: Progress;
    votes: Votes;
    issuetype: Issuetype;
    timespent?: any;
    project: Project;
    aggregatetimespent?: any;
    watches: Watches;
    created: Date;
    updated: Date;
    timeoriginalestimate?: any;
    description?: any;
    summary: string;
    environment?: any;
    duedate?: any;
}

export interface IssueResponse {
    expand: string;
    id: string;
    self: string;
    key: string;
    fields: Fields;
}
