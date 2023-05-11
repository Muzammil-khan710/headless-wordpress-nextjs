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
                <div dangerouslySetInnerHTML={{ __html: item.content}} />
            </React.Fragment>
        ))}
    </section>
  )
}

export default SingleBlog