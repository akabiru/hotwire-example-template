module ArticlesHelper
  def parse_markdown_content(content)
    return unless content

    @markdown ||= Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, tables: true)
    @markdown.render(content)
  end
end
