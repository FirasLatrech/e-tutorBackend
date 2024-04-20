import { CourseEntity } from 'src/courses/infrastructure/persistence/relational/entities/course.entity';
import { LessonEntity } from 'src/lesson/infrastructure/persistence/relational/entities/lesson.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class ChapterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @OneToMany(() => LessonEntity, (lesson) => lesson.chapter)
  lessons: LessonEntity[];

  @ManyToOne(() => CourseEntity, (course)=> course.chapters)
  @JoinColumn({ name: 'course_id' })
  course: CourseEntity;

  @Column({ type: 'timestamp', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date | null;
}
