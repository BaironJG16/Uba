class Api::V1::RegistroController < ApplicationController
    before_action :set_registros, only: %i[ show update destroy ]

    # GET /servicios
    def index
        @registros = Registro.all
        render json: @registros
    end

    # GET /servicios/1
    def show
        render json: @registros
    end

    # POST /servicios
    def create
        @registros = Registro.new(registros_params)
        if @registros.save
            render json: @registros, status: :created, location: @registros
        else
            render json: @registros.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /servicios/1
    def update
        if @registros.update(registros_params)
            render json: @registros
        else
            render json: @registros.errors, status: :unprocessable_entity
        end
    end

    # DELETE /servicios/1
    def destroy
        @registros.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_registros
        @registros = Registro.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def registros_params
        params.fetch(:registros, {})
    end
end