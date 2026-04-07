    export async function getRepoStars(repoUrl: string): Promise<number | null> {
    try {
        const match = repoUrl.match(/github\.com\/([^/]+)\/([^/]+?)(?:\.git)?$/)
        if (!match) return null
        const [, owner, repo] = match
        const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        next: { revalidate: 3600 },
        })
        if (!res.ok) return null
        const data = await res.json()
        return data.stargazers_count
    } catch {
        return null
    }
    }