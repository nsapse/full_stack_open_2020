const dummy = (blogs) => {
    return 1
}

const total_likes = (blogs) => {
    return blogs.reduce((likes, blog) => likes + blog.likes, 0)
}

const most_favorited_blog = (blogs) => {
    const top_blog_post = blogs.reduce((max, blog) => max.likes > blog.likes ? max : blog, 1)    
    return {title:top_blog_post.title,
            author: top_blog_post.author,
            likes: top_blog_post.likes};
}

module.exports = {
    dummy,
    total_likes,
    most_favorited_blog,
}