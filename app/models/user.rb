class User < ApplicationRecord
  rolify
  def asignar_rol_admin
    role = Role.find_by(name: :admin)
    add_role(role.name)
  end
end