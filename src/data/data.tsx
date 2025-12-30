import { createListCollection } from "@chakra-ui/react"

export const locations = createListCollection({
    items: [
        { label: "Remote", value: "remote" },
        { label: "USA", value: "usa" },
        { label: "UK", value: "uk" },
        { label: "Pakistan", value: "pakistan" },
    ],
})

export const jobTypes = createListCollection({
    items: [
        { label: "Full Time", value: "full-time" },
        { label: "Part Time", value: "part-time" },
        { label: "Contract", value: "contract" },
    ],
})

export const profileStats = [
    {
        label: "Profile Visitors",
        value: 140,
    },
    {
        label: "Resume Views",
        value: 20,
    },
    {
        label: "My Jobs",
        value: 88,
    },
]

export const featuredJobs = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    title: "UI/UX Designer",
    location: "Seattle, USA (Remote)",
    meta: "1 day ago | 22 applicants",
}))

export const recommendedJobs = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: "Frontend Developer",
    location: "New York, USA",
    meta: "2 days ago | 15 applicants",
}))

export const latestJobs = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    title: "Product Designer",
    location: "Remote",
    meta: "Just now | 5 applicants",
}))
