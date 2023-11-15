class Api::V1::ServiciosController < ApplicationController
    before_action :set_servicios, only: %i[ show update destroy ]

    # GET /servicios
    def index
        @servicios = Servicio.all
        render json: @servicios
    end

    # GET /servicios/1
    def show
        render json: @servicios
    end

    # POST /servicios
    def create
        @servicios = Servicio.new(servicios_params)
        if @servicios.save
            render json: @servicios, status: :created, location: @servicios
        else
            render json: @servicios.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /servicios/1
    def update
        if @servicios.update(servicios_params)
            render json: @servicios
        else
            render json: @servicios.errors, status: :unprocessable_entity
        end
    end

    # DELETE /servicios/1
    def destroy
        @servicios.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_servicio
        @servicios = Servicio.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def servicio_params
        params.fetch(:servicios, {})
    end
end