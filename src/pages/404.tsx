import { useRouter } from "next/router";
import React, { useEffect } from "react"

type Props = {}

const Custom404 = (props:Props) => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 2500);
    })

    return(
        <React.Fragment>
            <h1 className="text-3xl text-center">Oops! An error occured while you were here</h1>
            <p className="text-center">redirecting to homepage</p>
        </React.Fragment>
    )
}

export default Custom404