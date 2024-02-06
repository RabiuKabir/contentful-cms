const Project = ({id, url, img, title}) => {
    return (
        <a
        key={id}
        href={url}
        target='_blank'
        rel='noreferrer'
        className='project'
      >
        <img src={img} alt={title} className='img' />
        <h5>{title}</h5>
      </a>
    )
}

export default Project