export default async function graphqlRequest(query: any) {
    const url =`${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}`
    const headers = {
        'Content-Type' : 'application/json'
    }

    const res = await fetch(url, {
        headers,
        method:'POST',
        body: JSON.stringify(query)
    }) 

    const response = await res.json()
    return response
}