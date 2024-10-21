# Use: thor jekyll:new The title of the new post

require "stringex"
class Jekyll < Thor
  desc "new", "create a new post"
  method_option :editor, :default => "subl"
  def new(*title)
    title = title.join(" ")
    date = Time.now.strftime('%Y-%m-%d')
    filename = "_posts/#{date}-#{title.to_url}.markdown"

    if File.exist?(filename)
      abort("#{filename} already exists!")
    end

    puts "Creating new post: #{filename}"
    open(filename, 'w') do |post|
      post.puts "---"
      post.puts "title: \"#{title.gsub(/&/,'&amp;').capitalize()}\""
      post.puts "author: enidev911"
      post.puts "date: #{date}"
      post.puts "---"
    end

    system(options[:editor], filename)
  end
end