const dummy = (blogs) => {
    return 1
}

const total_likes = (blogs) => {
    return blogs.reduce((likes, blog) => likes + blog.likes, 0)
}


module.exports = {
    dummy,
    total_likes
}