// Sample data for debug purposes.
import { SubmissionValidity, type Submission, type Profile, AccountState, Role, type ReplayData, type SubmissionWithReplay } from '~/assets/types/database';

export const SAMPLE_SUBMISSIONS: Submission[] = [
    {
        id: "00000000-0000-0000-0001-000000000000",
        game_mode: "sprint_10l",
        replay_date: new Date().toISOString(),
        upload_date: new Date().toISOString(),
        submitted_by: "f260abb2-b4f1-43b0-a461-ef0362e1c790",
        validity: SubmissionValidity.Verified,
        score: {
            0: 60,
            1: 26,
            date: new Date().toISOString()
        },
        proof: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        id: "00000000-0000-0000-0001-000000000001",
        game_mode: "sprint_20l",
        replay_date: new Date().toISOString(),
        upload_date: new Date().toISOString(),
        submitted_by: "f260abb2-b4f1-43b0-a461-ef0362e1c790",
        validity: SubmissionValidity.Unverified,
        score: {
            0: 60,
            1: 50,
            date: new Date().toISOString()
        },
        proof: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        id: "00000000-0000-0000-0001-000000000002",
        game_mode: "sprint_40l",
        replay_date: new Date().toISOString(),
        upload_date: new Date().toISOString(),
        submitted_by: "f260abb2-b4f1-43b0-a461-ef0362e1c790",
        validity: SubmissionValidity.Rejected,
        score: {
            0: 60,
            1: 100,
            date: new Date().toISOString()
        },
        proof: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        id: "00000000-0000-0000-0001-000000000003",
        game_mode: "sprint_100l",
        replay_date: new Date().toISOString(),
        upload_date: new Date().toISOString(),
        submitted_by: "f260abb2-b4f1-43b0-a461-ef0362e1c790",
        validity: SubmissionValidity.Suspicious,
        score: {
            0: 60,
            1: 250,
            date: new Date().toISOString()
        },
        proof: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
        id: "00000000-0000-0000-0001-000000000004",
        game_mode: "sprint_1000l",
        replay_date: new Date().toISOString(),
        upload_date: new Date().toISOString(),
        submitted_by: "f260abb2-b4f1-43b0-a461-ef0362e1c790",
        validity: SubmissionValidity.ToolAssisted,
        score: {
            0: 60,
            1: 2500,
            date: new Date().toISOString()
        },
        proof: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
] as const;

export const SAMPLE_REPLAYS: ReplayData[] = [
    {
        submission_id: "00000000-0000-0000-0001-000000000000",
        replay_data: "eJydUV1v00AQvL07W4FHfgG+NJEfTunZ+Wr9VpB4QhSVgJAqVB2JG1tJ7Mq+FlDVB/45c26dH4As+3Zmd2fn1o/qUG9ylan2rikrd5OYvdKeU9n1D62cbb+2OcCt3be5VhvrfHFq0umpSU/T+dtkmplplpyj6yFv2rKukP9mJslykhiQbe7b03S5SBfGmMQzzpXVVmWPqt2VKL9O9FIniZ7qZKZn+lx7nOqFTgyOZKrnnpsj9VzUsQt95gnj86k+g9dbu4a3a6P/84HEtilh1kxmWq3zyuWNymD4p91+LCtou+YeO9jX692H7yqbYx1NfedD41f2kL+E631um5e4vdvbtuhBYXd9kXW7nl3XTX7c8C/bVEdQlNvivT30k6v8t/tctz10gH1cNke6LI6h97e+d92YjQU9xbhDXbuir2g3He9tbGzTdFF5OApcfcHfXOGLLfh793xfui3q1nVLgszzpCetcOc/fnfq0+Xq5uLm6vLd5Uo9vf47GryiQUSxCIMxEY9ezkBGYsQQ80EoWMyHMpScxgGRooiDZ1woiZeFcswDwbmikQDucgPGpaCYKSIaUkReM+AkIj7q4gGjMPY6IfQ5plIsfdZrQSmATuhnSxmKE8JcIUjxoe9943kedj4I/cRZ0LkaUcSAGXEhhww5aMlu5gnrPHEOlRg+h10fsIzF8T5wKiUifiIGBFWBWwvUeo9gSAYUw0kEHyOvDWecj5mUxLGDfzZhvIk=" // gitleaks: ignore
    },
    {
        submission_id: "00000000-0000-0000-0001-000000000001",
        replay_data: "eJydUktv00AQ9sw+avEr8OYhH1at7aYPcgMkTogiKAipQpWbmMRqGle2y0OIA/+cbzZxe0c57O74m/kek9/uflP+qlo3d+8uLq9fXn+4eHVx6bzrqmrp5nlRnGUneZHPvPtetV3dbIH8nB3mZ4czoPqy+9QJ8Fu56SrvlmVfAVBkRXGUvTjKT5/np/NZPj8+B/iuAfDqa7gIqrtv621/XWSbwNf39Xbl5r9dty5vqzdf3DyTgZ2bH3v3o2y3jyzdXdP0azfv2we81vVq/bq8G57LtrlfPPShe7VuOtxy78r+dj9xW/3s3zfdAL/ZNIvb4dHj23Cv14+Yb+UCeq8y/58/WO4WTVs9GUDo3XovqG4fibpl2bahuKi2vWwll7S+D2nUd91T1PC5Lw9NYkVKaLopV2/rbfU4+LZGfFe5P/N57o899jnzL7y8C3/q8wxHfuxPpHaCTztQqJ76cylk8r3w5/CyamssMjuchfUMWXfLsCvcPnzEcl/VOOBjU5VtkPnnz7O/OVsiRwlbNSWyOPWUSSXKmqlWPNLyZnaalWPUophZGUpp3xVNNPqU4URPImAJPQanJjKGowkl5GQGkdac8BjziaaUGHAIFzHHRkUpOxphfkxgU6neTxduMux4ssNqRY4pGtG+VzkT9HKM6alUeawwA2wpOsFN0Mx0wMM8pa2lsTYk0yYsPDZK1NTEmqPUyPwRyezYgBk+nYILdsgjjsRpyvuMODmwmmmqFLQTQRPtNUl26AUi6A6YQbdgngVNSuuExqIPapVKxP8uays5G9kCTXaZQGtKgScacSI9cciFJlp2g7eKNUVp2FsMNVOtKRUkj3VMUCD9O29GEnZGEsHOIVPbccTAusha+NYkSepw3/GS22kzFl3SgSyVZAkNZjL8E8TzgYUisNug0cQWmrSCz5HMxn8HrqELbJGjsfTokA8rtv8A+THLRA==" // gitleaks: ignore
    }
] as const;

export const SAMPLE_SUBMISSIONS_WITH_REPLAYS: SubmissionWithReplay[] = [
    {
        ...SAMPLE_SUBMISSIONS[0],
        replay_data: SAMPLE_REPLAYS[0].replay_data
    },
    {
        ...SAMPLE_SUBMISSIONS[1],
        replay_data: SAMPLE_REPLAYS[0].replay_data
    },
    {
        ...SAMPLE_SUBMISSIONS[2],
        replay_data: SAMPLE_REPLAYS[0].replay_data
    },
    {
        ...SAMPLE_SUBMISSIONS[3],
        replay_data: SAMPLE_REPLAYS[0].replay_data
    },
    {
        ...SAMPLE_SUBMISSIONS[4],
        replay_data: SAMPLE_REPLAYS[0].replay_data
    }
] as const;

export const SAMPLE_PROFILES: Profile[] = [
    {
        id: "00000000-0000-0000-0000-000000000000",
        username: "testuser",
        account_state: AccountState.Normal,
        role: Role.User,
        bio: "I'm a test user!",
    },
    {
        id: "00000000-0000-0000-0000-000000000001",
        username: "newuser",
        account_state: AccountState.Unverified,
        role: Role.User,
        bio: "I'm a new user!",
    },
    {
        id: "00000000-0000-0000-0000-000000000002",
        username: "admin",
        account_state: AccountState.Normal,
        role: Role.Admin,
        bio: "I'm an admin!",
    },
    {
        id: "00000000-0000-0000-0000-000000000003",
        username: "verifier",
        account_state: AccountState.Normal,
        role: Role.Verifier,
        bio: "I'm a verifier!",
    },
    {
        id: "00000000-0000-0000-0000-000000000004",
        username: "banned",
        account_state: AccountState.Banned,
        role: Role.User,
        bio: "I'm a banned user!",
    },
    {
        id: "00000000-0000-0000-0000-000000000005",
        username: "bannedadmin",
        account_state: AccountState.Banned,
        role: Role.Admin,
        bio: "I'm a banned admin!",
    },
    {
        id: "00000000-0000-0000-0000-000000000006",
        username: "bannedverifier",
        account_state: AccountState.Banned,
        role: Role.Verifier,
        bio: "I'm a banned verifier!",
    },
] as const;