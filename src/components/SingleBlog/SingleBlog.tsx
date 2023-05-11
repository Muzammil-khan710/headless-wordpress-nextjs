import React from "react"

type Props = {
    data:any
}

const SingleBlog = ({data}: Props) => {
  return (
    <section>
        {data.map((item:any) => (
            <React.Fragment key={item.link}>
                <h1>{item.title}</h1>
                <p>{item.excerpt}</p>
            </React.Fragment>
        ))}
    </section>
  )
}

export default SingleBlog