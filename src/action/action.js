import {
    UPCOMING_CAMPAIGNS,
    LIVE_CAMPAIGNS,
    PAST_CAMPAIGNS,
    UPDATE
} from "./actionType";

export function upcomingCampaignData() {
    return {
        type: UPCOMING_CAMPAIGNS
    };
}

export function liveCampaignData() {
    return {
        type: LIVE_CAMPAIGNS
    };
}

export function pastCampaignData() {
    return {
        type: PAST_CAMPAIGNS
    };
}

export function updateData(oldDate, newDate) {
    return {
        type: UPDATE,
        oldDate: oldDate,
        newDate: newDate
    };
}