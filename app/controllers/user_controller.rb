class UserController < ApplicationController
    def asignar_rol
        user = User.find(1)
        role = Role.find_by(name: :admin)
        user.add_role(role.name)
        # Puedes agregar más lógica o redirecciones según tus necesidades
    end
end