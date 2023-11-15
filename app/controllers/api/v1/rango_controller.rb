class Api::V1::RangoController < ApplicationController
    before_action :set_rangos, only: %i[ show update destroy ]

    # GET /servicios
    def index
        @rangos = Rango.all
        render json: @rangos
    end

    # GET /servicios/1
    def show
        render json: @rangos
    end

    # POST /servicios
    def create
        @rangos = Rango.new(rangos_params)
        if @rangos.save
            render json: @rangos, status: :created, location: @rangos
        else
            render json: @rangos.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /servicios/1
    def update
        if @rangos.update(rangos_params)
            render json: @rangos
        else
            render json: @rangos.errors, status: :unprocessable_entity
        end
    end

    # DELETE /servicios/1
    def destroy
        @rangos.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_rangos
        @rangos = Rango.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def rangos_params
        params.fetch(:rangos, {})
    end
end