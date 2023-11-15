class Api::V1::NinoController < ApplicationController
    before_action :set_ninos, only: %i[ show update destroy ]

    # GET /servicios
    def index
        @ninos = Nino.all
        render json: @ninos
    end

    # GET /servicios/1
    def show
        render json: @ninos
    end

    # POST /servicios
    def create
        @ninos = Nino.new(ninos_params)
        if @ninos.save
            render json: @ninos, status: :created, location: @ninos
        else
            render json: @ninos.errors, status: :unprocessable_entity
        end
    end

    # PATCH/PUT /servicios/1
    def update
        if @ninos.update(ninos_params)
            render json: @ninos
        else
            render json: @ninos.errors, status: :unprocessable_entity
        end
    end

    # DELETE /servicios/1
    def destroy
        @ninos.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_ninos
        @ninos = Nino.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ninos_params
        params.fetch(:ninos, {})
    end
end