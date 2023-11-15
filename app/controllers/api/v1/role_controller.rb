class Api::V1::RoleController < ApplicationController
    before_action :set_roles, only: %i[ show update destroy ]

    # GET /roles
    def index
        @roles = Role.all
        render json: @roles
    end

    # GET /roles/1
    def show
        render json: @roles
    end

    # POST /roles
    def create
        @roles = Role.new(roles_params)
        if @roles.save
            render json: @roles, status: :created, location: @roles
        else
            render json: @roles.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /roles/1
    def update
        if @roles.update(roles_params)
            render json: @roles
        else
            render json: @roles.errors, status: :unprocessable_entity
        end
    end

    # DELETE /roles/1
    def destroy
        @roles.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_roles
        @roles = Role.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def roles_params
        params.fetch(:roles, {})
    end
end
