class Api::PostsController < ApplicationController
  before_action :set_posts, only: [:show, :update, :destroy]

  # GET /api/posts
  def index
    @post = Post.all
    render json: @post
  end

  # GET /api/posts/:id
  def show
    render json: @post
  end

  # POST /api/posts
  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/posts/:id
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/posts/:id
  def destroy
    @post.destroy
    head :no_content
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:title, :content)
  end
end
