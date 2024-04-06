import { NullableType } from 'src/utils/types/nullable.type';

import { EntityCondition } from 'src/utils/types/entity-condition.type';

import { Course } from 'src/courses/domain/course';
import { CourseEntity } from './relational/entities/course.entity';
import {
  FilterCourseDto,
  SortCourseDto,
} from 'src/courses/dto/query-course.dto';
import { IPaginationOptions } from 'src/utils/types/pagination-options';

export abstract class CourseRepository {
  abstract create(data: Omit<Course, 'id'>): Promise<Course>;

  abstract findManyWithPagination({
    filterOptions,
    sortOptions,
    search,
    paginationOptions,
  }: {
    filterOptions?: FilterCourseDto | null;
    sortOptions?: SortCourseDto[] | null;
    search: string;
    paginationOptions: IPaginationOptions;
  }): Promise<Course[]>;

  abstract findOne(
    fields: EntityCondition<CourseEntity>,
  ): Promise<NullableType<CourseEntity>>;

  // abstract update(
  //   id: Course['id'],
  //   payload: DeepPartial<Course>,
  // ): Promise<Course | null>;

  // abstract softDelete(id: Course['id']): Promise<void>;
}
