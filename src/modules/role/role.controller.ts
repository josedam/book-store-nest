import {
  Controller,
  Get,
  Body,
  Post,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from './role.entity';

@Controller('roles')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get()
  async getRoles(): Promise<Role[]> {
    const roles = this._roleService.getAll();
    return roles;
  }

  @Get(':id')
  async getRole(@Param('id', ParseIntPipe) id: number): Promise<Role> {
    const role = this._roleService.get(id);
    return role;
  }

  @Post()
  async createRole(@Body() role: Role) {
    const createdRole = this._roleService.create(role);
    return createdRole;
  }

  @Patch(':id')
  async updateRole(
    @Param('id', ParseIntPipe) id: number,
    @Body() role: Role,
  ): Promise<void> {
    const updatedRole = this._roleService.update(id, role);
    return updatedRole;
  }

  @Delete(':id')
  async deleteRole(@Param('id', ParseIntPipe) id: number) {
    const deletedRole = this._roleService.delete(id);
    return deletedRole;
  }
}
