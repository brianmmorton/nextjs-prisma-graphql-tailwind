import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateAnswer = {
  __typename?: 'AggregateAnswer';
  _count?: Maybe<AnswerCountAggregate>;
  _max?: Maybe<AnswerMaxAggregate>;
  _min?: Maybe<AnswerMinAggregate>;
};

export type AggregateOrganization = {
  __typename?: 'AggregateOrganization';
  _count?: Maybe<OrganizationCountAggregate>;
  _max?: Maybe<OrganizationMaxAggregate>;
  _min?: Maybe<OrganizationMinAggregate>;
};

export type AggregateOrganizationMembership = {
  __typename?: 'AggregateOrganizationMembership';
  _count?: Maybe<OrganizationMembershipCountAggregate>;
  _max?: Maybe<OrganizationMembershipMaxAggregate>;
  _min?: Maybe<OrganizationMembershipMinAggregate>;
};

export type AggregateQuestion = {
  __typename?: 'AggregateQuestion';
  _count?: Maybe<QuestionCountAggregate>;
  _max?: Maybe<QuestionMaxAggregate>;
  _min?: Maybe<QuestionMinAggregate>;
};

export type AggregateTraining = {
  __typename?: 'AggregateTraining';
  _avg?: Maybe<TrainingAvgAggregate>;
  _count?: Maybe<TrainingCountAggregate>;
  _max?: Maybe<TrainingMaxAggregate>;
  _min?: Maybe<TrainingMinAggregate>;
  _sum?: Maybe<TrainingSumAggregate>;
};

export type AggregateTrainingAssignee = {
  __typename?: 'AggregateTrainingAssignee';
  _avg?: Maybe<TrainingAssigneeAvgAggregate>;
  _count?: Maybe<TrainingAssigneeCountAggregate>;
  _max?: Maybe<TrainingAssigneeMaxAggregate>;
  _min?: Maybe<TrainingAssigneeMinAggregate>;
  _sum?: Maybe<TrainingAssigneeSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateUserQuestionResponse = {
  __typename?: 'AggregateUserQuestionResponse';
  _count?: Maybe<UserQuestionResponseCountAggregate>;
  _max?: Maybe<UserQuestionResponseMaxAggregate>;
  _min?: Maybe<UserQuestionResponseMinAggregate>;
};

export type Answer = {
  __typename?: 'Answer';
  _count?: Maybe<AnswerCount>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  question: Question;
  questionId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userQuestionResponse: Array<UserQuestionResponse>;
};


export type AnswerUserQuestionResponseArgs = {
  cursor?: InputMaybe<UserQuestionResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserQuestionResponseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserQuestionResponseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserQuestionResponseWhereInput>;
};

export type AnswerCount = {
  __typename?: 'AnswerCount';
  userQuestionResponse: Scalars['Int'];
};

export type AnswerCountAggregate = {
  __typename?: 'AnswerCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  isCorrect: Scalars['Int'];
  questionId: Scalars['Int'];
  title: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type AnswerCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCorrect?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AnswerCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  question: QuestionCreateNestedOneWithoutAnswersInput;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseCreateNestedManyWithoutAnswerInput>;
};

export type AnswerCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AnswerCreateManyQuestionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AnswerCreateManyQuestionInputEnvelope = {
  data: Array<AnswerCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type AnswerCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AnswerCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<AnswerCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<AnswerCreateManyQuestionInputEnvelope>;
};

export type AnswerCreateNestedOneWithoutUserQuestionResponseInput = {
  connect?: InputMaybe<AnswerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AnswerCreateOrConnectWithoutUserQuestionResponseInput>;
  create?: InputMaybe<AnswerCreateWithoutUserQuestionResponseInput>;
};

export type AnswerCreateOrConnectWithoutQuestionInput = {
  create: AnswerCreateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateOrConnectWithoutUserQuestionResponseInput = {
  create: AnswerCreateWithoutUserQuestionResponseInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerCreateWithoutQuestionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseCreateNestedManyWithoutAnswerInput>;
};

export type AnswerCreateWithoutUserQuestionResponseInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  isCorrect: Scalars['Boolean'];
  question: QuestionCreateNestedOneWithoutAnswersInput;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type AnswerGroupBy = {
  __typename?: 'AnswerGroupBy';
  _count?: Maybe<AnswerCountAggregate>;
  _max?: Maybe<AnswerMaxAggregate>;
  _min?: Maybe<AnswerMinAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  isCorrect: Scalars['Boolean'];
  questionId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AnswerListRelationFilter = {
  every?: InputMaybe<AnswerWhereInput>;
  none?: InputMaybe<AnswerWhereInput>;
  some?: InputMaybe<AnswerWhereInput>;
};

export type AnswerMaxAggregate = {
  __typename?: 'AnswerMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
  questionId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnswerMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCorrect?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AnswerMinAggregate = {
  __typename?: 'AnswerMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  isCorrect?: Maybe<Scalars['Boolean']>;
  questionId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type AnswerMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCorrect?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AnswerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AnswerOrderByWithAggregationInput = {
  _count?: InputMaybe<AnswerCountOrderByAggregateInput>;
  _max?: InputMaybe<AnswerMaxOrderByAggregateInput>;
  _min?: InputMaybe<AnswerMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCorrect?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AnswerOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isCorrect?: InputMaybe<SortOrder>;
  question?: InputMaybe<QuestionOrderByWithRelationInput>;
  questionId?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseOrderByRelationAggregateInput>;
};

export type AnswerRelationFilter = {
  is?: InputMaybe<AnswerWhereInput>;
  isNot?: InputMaybe<AnswerWhereInput>;
};

export enum AnswerScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsCorrect = 'isCorrect',
  QuestionId = 'questionId',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type AnswerScalarWhereInput = {
  AND?: InputMaybe<Array<AnswerScalarWhereInput>>;
  NOT?: InputMaybe<Array<AnswerScalarWhereInput>>;
  OR?: InputMaybe<Array<AnswerScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  questionId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AnswerScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AnswerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AnswerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AnswerScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isCorrect?: InputMaybe<BoolWithAggregatesFilter>;
  questionId?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AnswerUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCorrect?: InputMaybe<BoolFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneRequiredWithoutAnswersNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseUpdateManyWithoutAnswerNestedInput>;
};

export type AnswerUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCorrect?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnswerUpdateManyWithWhereWithoutQuestionInput = {
  data: AnswerUpdateManyMutationInput;
  where: AnswerScalarWhereInput;
};

export type AnswerUpdateManyWithoutQuestionNestedInput = {
  connect?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AnswerCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<AnswerCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<AnswerCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AnswerScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  set?: InputMaybe<Array<AnswerWhereUniqueInput>>;
  update?: InputMaybe<Array<AnswerUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<AnswerUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<AnswerUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type AnswerUpdateOneRequiredWithoutUserQuestionResponseNestedInput = {
  connect?: InputMaybe<AnswerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AnswerCreateOrConnectWithoutUserQuestionResponseInput>;
  create?: InputMaybe<AnswerCreateWithoutUserQuestionResponseInput>;
  update?: InputMaybe<AnswerUpdateWithoutUserQuestionResponseInput>;
  upsert?: InputMaybe<AnswerUpsertWithoutUserQuestionResponseInput>;
};

export type AnswerUpdateWithWhereUniqueWithoutQuestionInput = {
  data: AnswerUpdateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpdateWithoutQuestionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCorrect?: InputMaybe<BoolFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseUpdateManyWithoutAnswerNestedInput>;
};

export type AnswerUpdateWithoutUserQuestionResponseInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isCorrect?: InputMaybe<BoolFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneRequiredWithoutAnswersNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AnswerUpsertWithWhereUniqueWithoutQuestionInput = {
  create: AnswerCreateWithoutQuestionInput;
  update: AnswerUpdateWithoutQuestionInput;
  where: AnswerWhereUniqueInput;
};

export type AnswerUpsertWithoutUserQuestionResponseInput = {
  create: AnswerCreateWithoutUserQuestionResponseInput;
  update: AnswerUpdateWithoutUserQuestionResponseInput;
};

export type AnswerWhereInput = {
  AND?: InputMaybe<Array<AnswerWhereInput>>;
  NOT?: InputMaybe<Array<AnswerWhereInput>>;
  OR?: InputMaybe<Array<AnswerWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isCorrect?: InputMaybe<BoolFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseListRelationFilter>;
};

export type AnswerWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumMembershipRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<MembershipRole>;
};

export type EnumMembershipRoleFilter = {
  equals?: InputMaybe<MembershipRole>;
  in?: InputMaybe<Array<MembershipRole>>;
  not?: InputMaybe<NestedEnumMembershipRoleFilter>;
  notIn?: InputMaybe<Array<MembershipRole>>;
};

export type EnumMembershipRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMembershipRoleFilter>;
  _min?: InputMaybe<NestedEnumMembershipRoleFilter>;
  equals?: InputMaybe<MembershipRole>;
  in?: InputMaybe<Array<MembershipRole>>;
  not?: InputMaybe<NestedEnumMembershipRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MembershipRole>>;
};

export type EnumQuestionFormatFieldUpdateOperationsInput = {
  set?: InputMaybe<QuestionFormat>;
};

export type EnumQuestionFormatFilter = {
  equals?: InputMaybe<QuestionFormat>;
  in?: InputMaybe<Array<QuestionFormat>>;
  not?: InputMaybe<NestedEnumQuestionFormatFilter>;
  notIn?: InputMaybe<Array<QuestionFormat>>;
};

export type EnumQuestionFormatWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumQuestionFormatFilter>;
  _min?: InputMaybe<NestedEnumQuestionFormatFilter>;
  equals?: InputMaybe<QuestionFormat>;
  in?: InputMaybe<Array<QuestionFormat>>;
  not?: InputMaybe<NestedEnumQuestionFormatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<QuestionFormat>>;
};

export type EnumTrainingStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<TrainingStatus>;
};

export type EnumTrainingStatusFilter = {
  equals?: InputMaybe<TrainingStatus>;
  in?: InputMaybe<Array<TrainingStatus>>;
  not?: InputMaybe<NestedEnumTrainingStatusFilter>;
  notIn?: InputMaybe<Array<TrainingStatus>>;
};

export type EnumTrainingStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTrainingStatusFilter>;
  _min?: InputMaybe<NestedEnumTrainingStatusFilter>;
  equals?: InputMaybe<TrainingStatus>;
  in?: InputMaybe<Array<TrainingStatus>>;
  not?: InputMaybe<NestedEnumTrainingStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TrainingStatus>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export enum MembershipRole {
  Administrator = 'ADMINISTRATOR',
  Collaborator = 'COLLABORATOR',
  User = 'USER',
  Viewer = 'VIEWER'
}

export type Mutation = {
  __typename?: 'Mutation';
  createManyAnswer: AffectedRowsOutput;
  createManyOrganization: AffectedRowsOutput;
  createManyOrganizationMembership: AffectedRowsOutput;
  createManyQuestion: AffectedRowsOutput;
  createManyTraining: AffectedRowsOutput;
  createManyTrainingAssignee: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserQuestionResponse: AffectedRowsOutput;
  createOneAnswer: Answer;
  createOneOrganization: Organization;
  createOneOrganizationMembership: OrganizationMembership;
  createOneQuestion: Question;
  createOneTraining: Training;
  createOneTrainingAssignee: TrainingAssignee;
  createOneUser: User;
  createOneUserQuestionResponse: UserQuestionResponse;
  deleteManyAnswer: AffectedRowsOutput;
  deleteManyOrganization: AffectedRowsOutput;
  deleteManyOrganizationMembership: AffectedRowsOutput;
  deleteManyQuestion: AffectedRowsOutput;
  deleteManyTraining: AffectedRowsOutput;
  deleteManyTrainingAssignee: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserQuestionResponse: AffectedRowsOutput;
  deleteOneAnswer?: Maybe<Answer>;
  deleteOneOrganization?: Maybe<Organization>;
  deleteOneOrganizationMembership?: Maybe<OrganizationMembership>;
  deleteOneQuestion?: Maybe<Question>;
  deleteOneTraining?: Maybe<Training>;
  deleteOneTrainingAssignee?: Maybe<TrainingAssignee>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserQuestionResponse?: Maybe<UserQuestionResponse>;
  updateManyAnswer: AffectedRowsOutput;
  updateManyOrganization: AffectedRowsOutput;
  updateManyOrganizationMembership: AffectedRowsOutput;
  updateManyQuestion: AffectedRowsOutput;
  updateManyTraining: AffectedRowsOutput;
  updateManyTrainingAssignee: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserQuestionResponse: AffectedRowsOutput;
  updateOneAnswer?: Maybe<Answer>;
  updateOneOrganization?: Maybe<Organization>;
  updateOneOrganizationMembership?: Maybe<OrganizationMembership>;
  updateOneQuestion?: Maybe<Question>;
  updateOneTraining?: Maybe<Training>;
  updateOneTrainingAssignee?: Maybe<TrainingAssignee>;
  updateOneUser?: Maybe<User>;
  updateOneUserQuestionResponse?: Maybe<UserQuestionResponse>;
  upsertOneAnswer: Answer;
  upsertOneOrganization: Organization;
  upsertOneOrganizationMembership: OrganizationMembership;
  upsertOneQuestion: Question;
  upsertOneTraining: Training;
  upsertOneTrainingAssignee: TrainingAssignee;
  upsertOneUser: User;
  upsertOneUserQuestionResponse: UserQuestionResponse;
};


export type MutationCreateManyAnswerArgs = {
  data: Array<AnswerCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyOrganizationArgs = {
  data: Array<OrganizationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyOrganizationMembershipArgs = {
  data: Array<OrganizationMembershipCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyQuestionArgs = {
  data: Array<QuestionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTrainingArgs = {
  data: Array<TrainingCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTrainingAssigneeArgs = {
  data: Array<TrainingAssigneeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserQuestionResponseArgs = {
  data: Array<UserQuestionResponseCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateOneAnswerArgs = {
  data: AnswerCreateInput;
};


export type MutationCreateOneOrganizationArgs = {
  data: OrganizationCreateInput;
};


export type MutationCreateOneOrganizationMembershipArgs = {
  data: OrganizationMembershipCreateInput;
};


export type MutationCreateOneQuestionArgs = {
  data: QuestionCreateInput;
};


export type MutationCreateOneTrainingArgs = {
  data: TrainingCreateInput;
};


export type MutationCreateOneTrainingAssigneeArgs = {
  data: TrainingAssigneeCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneUserQuestionResponseArgs = {
  data: UserQuestionResponseCreateInput;
};


export type MutationDeleteManyAnswerArgs = {
  where?: InputMaybe<AnswerWhereInput>;
};


export type MutationDeleteManyOrganizationArgs = {
  where?: InputMaybe<OrganizationWhereInput>;
};


export type MutationDeleteManyOrganizationMembershipArgs = {
  where?: InputMaybe<OrganizationMembershipWhereInput>;
};


export type MutationDeleteManyQuestionArgs = {
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationDeleteManyTrainingArgs = {
  where?: InputMaybe<TrainingWhereInput>;
};


export type MutationDeleteManyTrainingAssigneeArgs = {
  where?: InputMaybe<TrainingAssigneeWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserQuestionResponseArgs = {
  where?: InputMaybe<UserQuestionResponseWhereInput>;
};


export type MutationDeleteOneAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type MutationDeleteOneOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type MutationDeleteOneOrganizationMembershipArgs = {
  where: OrganizationMembershipWhereUniqueInput;
};


export type MutationDeleteOneQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type MutationDeleteOneTrainingArgs = {
  where: TrainingWhereUniqueInput;
};


export type MutationDeleteOneTrainingAssigneeArgs = {
  where: TrainingAssigneeWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserQuestionResponseArgs = {
  where: UserQuestionResponseWhereUniqueInput;
};


export type MutationUpdateManyAnswerArgs = {
  data: AnswerUpdateManyMutationInput;
  where?: InputMaybe<AnswerWhereInput>;
};


export type MutationUpdateManyOrganizationArgs = {
  data: OrganizationUpdateManyMutationInput;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type MutationUpdateManyOrganizationMembershipArgs = {
  data: OrganizationMembershipUpdateManyMutationInput;
  where?: InputMaybe<OrganizationMembershipWhereInput>;
};


export type MutationUpdateManyQuestionArgs = {
  data: QuestionUpdateManyMutationInput;
  where?: InputMaybe<QuestionWhereInput>;
};


export type MutationUpdateManyTrainingArgs = {
  data: TrainingUpdateManyMutationInput;
  where?: InputMaybe<TrainingWhereInput>;
};


export type MutationUpdateManyTrainingAssigneeArgs = {
  data: TrainingAssigneeUpdateManyMutationInput;
  where?: InputMaybe<TrainingAssigneeWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserQuestionResponseArgs = {
  data: UserQuestionResponseUpdateManyMutationInput;
  where?: InputMaybe<UserQuestionResponseWhereInput>;
};


export type MutationUpdateOneAnswerArgs = {
  data: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};


export type MutationUpdateOneOrganizationArgs = {
  data: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};


export type MutationUpdateOneOrganizationMembershipArgs = {
  data: OrganizationMembershipUpdateInput;
  where: OrganizationMembershipWhereUniqueInput;
};


export type MutationUpdateOneQuestionArgs = {
  data: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpdateOneTrainingArgs = {
  data: TrainingUpdateInput;
  where: TrainingWhereUniqueInput;
};


export type MutationUpdateOneTrainingAssigneeArgs = {
  data: TrainingAssigneeUpdateInput;
  where: TrainingAssigneeWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserQuestionResponseArgs = {
  data: UserQuestionResponseUpdateInput;
  where: UserQuestionResponseWhereUniqueInput;
};


export type MutationUpsertOneAnswerArgs = {
  create: AnswerCreateInput;
  update: AnswerUpdateInput;
  where: AnswerWhereUniqueInput;
};


export type MutationUpsertOneOrganizationArgs = {
  create: OrganizationCreateInput;
  update: OrganizationUpdateInput;
  where: OrganizationWhereUniqueInput;
};


export type MutationUpsertOneOrganizationMembershipArgs = {
  create: OrganizationMembershipCreateInput;
  update: OrganizationMembershipUpdateInput;
  where: OrganizationMembershipWhereUniqueInput;
};


export type MutationUpsertOneQuestionArgs = {
  create: QuestionCreateInput;
  update: QuestionUpdateInput;
  where: QuestionWhereUniqueInput;
};


export type MutationUpsertOneTrainingArgs = {
  create: TrainingCreateInput;
  update: TrainingUpdateInput;
  where: TrainingWhereUniqueInput;
};


export type MutationUpsertOneTrainingAssigneeArgs = {
  create: TrainingAssigneeCreateInput;
  update: TrainingAssigneeUpdateInput;
  where: TrainingAssigneeWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserQuestionResponseArgs = {
  create: UserQuestionResponseCreateInput;
  update: UserQuestionResponseUpdateInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumMembershipRoleFilter = {
  equals?: InputMaybe<MembershipRole>;
  in?: InputMaybe<Array<MembershipRole>>;
  not?: InputMaybe<NestedEnumMembershipRoleFilter>;
  notIn?: InputMaybe<Array<MembershipRole>>;
};

export type NestedEnumMembershipRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumMembershipRoleFilter>;
  _min?: InputMaybe<NestedEnumMembershipRoleFilter>;
  equals?: InputMaybe<MembershipRole>;
  in?: InputMaybe<Array<MembershipRole>>;
  not?: InputMaybe<NestedEnumMembershipRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<MembershipRole>>;
};

export type NestedEnumQuestionFormatFilter = {
  equals?: InputMaybe<QuestionFormat>;
  in?: InputMaybe<Array<QuestionFormat>>;
  not?: InputMaybe<NestedEnumQuestionFormatFilter>;
  notIn?: InputMaybe<Array<QuestionFormat>>;
};

export type NestedEnumQuestionFormatWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumQuestionFormatFilter>;
  _min?: InputMaybe<NestedEnumQuestionFormatFilter>;
  equals?: InputMaybe<QuestionFormat>;
  in?: InputMaybe<Array<QuestionFormat>>;
  not?: InputMaybe<NestedEnumQuestionFormatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<QuestionFormat>>;
};

export type NestedEnumTrainingStatusFilter = {
  equals?: InputMaybe<TrainingStatus>;
  in?: InputMaybe<Array<TrainingStatus>>;
  not?: InputMaybe<NestedEnumTrainingStatusFilter>;
  notIn?: InputMaybe<Array<TrainingStatus>>;
};

export type NestedEnumTrainingStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTrainingStatusFilter>;
  _min?: InputMaybe<NestedEnumTrainingStatusFilter>;
  equals?: InputMaybe<TrainingStatus>;
  in?: InputMaybe<Array<TrainingStatus>>;
  not?: InputMaybe<NestedEnumTrainingStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TrainingStatus>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Organization = {
  __typename?: 'Organization';
  _count?: Maybe<OrganizationCount>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  memberships: Array<OrganizationMembership>;
  name: Scalars['String'];
  trainings: Array<Training>;
  updatedAt: Scalars['DateTime'];
};


export type OrganizationMembershipsArgs = {
  cursor?: InputMaybe<OrganizationMembershipWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationMembershipScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationMembershipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMembershipWhereInput>;
};


export type OrganizationTrainingsArgs = {
  cursor?: InputMaybe<TrainingWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingWhereInput>;
};

export type OrganizationCount = {
  __typename?: 'OrganizationCount';
  memberships: Scalars['Int'];
  trainings: Scalars['Int'];
};

export type OrganizationCountAggregate = {
  __typename?: 'OrganizationCountAggregate';
  _all: Scalars['Int'];
  avatarUrl: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type OrganizationCountOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OrganizationCreateInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMembershipCreateNestedManyWithoutOrganizationInput>;
  name: Scalars['String'];
  trainings?: InputMaybe<TrainingCreateNestedManyWithoutOrganizationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrganizationCreateManyInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrganizationCreateNestedOneWithoutMembershipsInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutMembershipsInput>;
  create?: InputMaybe<OrganizationCreateWithoutMembershipsInput>;
};

export type OrganizationCreateNestedOneWithoutTrainingsInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutTrainingsInput>;
  create?: InputMaybe<OrganizationCreateWithoutTrainingsInput>;
};

export type OrganizationCreateOrConnectWithoutMembershipsInput = {
  create: OrganizationCreateWithoutMembershipsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateOrConnectWithoutTrainingsInput = {
  create: OrganizationCreateWithoutTrainingsInput;
  where: OrganizationWhereUniqueInput;
};

export type OrganizationCreateWithoutMembershipsInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  trainings?: InputMaybe<TrainingCreateNestedManyWithoutOrganizationInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrganizationCreateWithoutTrainingsInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  memberships?: InputMaybe<OrganizationMembershipCreateNestedManyWithoutOrganizationInput>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type OrganizationGroupBy = {
  __typename?: 'OrganizationGroupBy';
  _count?: Maybe<OrganizationCountAggregate>;
  _max?: Maybe<OrganizationMaxAggregate>;
  _min?: Maybe<OrganizationMinAggregate>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type OrganizationMaxAggregate = {
  __typename?: 'OrganizationMaxAggregate';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrganizationMaxOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OrganizationMembership = {
  __typename?: 'OrganizationMembership';
  id: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  role: MembershipRole;
  user: User;
  userId: Scalars['String'];
};

export type OrganizationMembershipCountAggregate = {
  __typename?: 'OrganizationMembershipCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  organizationId: Scalars['Int'];
  role: Scalars['Int'];
  userId: Scalars['Int'];
};

export type OrganizationMembershipCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrganizationMembershipCreateInput = {
  id?: InputMaybe<Scalars['String']>;
  organization: OrganizationCreateNestedOneWithoutMembershipsInput;
  role: MembershipRole;
  user: UserCreateNestedOneWithoutOrganizationMembershipInput;
};

export type OrganizationMembershipCreateManyInput = {
  id?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['String'];
  role: MembershipRole;
  userId: Scalars['String'];
};

export type OrganizationMembershipCreateManyOrganizationInput = {
  id?: InputMaybe<Scalars['String']>;
  role: MembershipRole;
  userId: Scalars['String'];
};

export type OrganizationMembershipCreateManyOrganizationInputEnvelope = {
  data: Array<OrganizationMembershipCreateManyOrganizationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationMembershipCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']>;
  organizationId: Scalars['String'];
  role: MembershipRole;
};

export type OrganizationMembershipCreateManyUserInputEnvelope = {
  data: Array<OrganizationMembershipCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type OrganizationMembershipCreateNestedManyWithoutOrganizationInput = {
  connect?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationMembershipCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<OrganizationMembershipCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<OrganizationMembershipCreateManyOrganizationInputEnvelope>;
};

export type OrganizationMembershipCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationMembershipCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<OrganizationMembershipCreateWithoutUserInput>>;
  createMany?: InputMaybe<OrganizationMembershipCreateManyUserInputEnvelope>;
};

export type OrganizationMembershipCreateOrConnectWithoutOrganizationInput = {
  create: OrganizationMembershipCreateWithoutOrganizationInput;
  where: OrganizationMembershipWhereUniqueInput;
};

export type OrganizationMembershipCreateOrConnectWithoutUserInput = {
  create: OrganizationMembershipCreateWithoutUserInput;
  where: OrganizationMembershipWhereUniqueInput;
};

export type OrganizationMembershipCreateWithoutOrganizationInput = {
  id?: InputMaybe<Scalars['String']>;
  role: MembershipRole;
  user: UserCreateNestedOneWithoutOrganizationMembershipInput;
};

export type OrganizationMembershipCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']>;
  organization: OrganizationCreateNestedOneWithoutMembershipsInput;
  role: MembershipRole;
};

export type OrganizationMembershipGroupBy = {
  __typename?: 'OrganizationMembershipGroupBy';
  _count?: Maybe<OrganizationMembershipCountAggregate>;
  _max?: Maybe<OrganizationMembershipMaxAggregate>;
  _min?: Maybe<OrganizationMembershipMinAggregate>;
  id: Scalars['String'];
  organizationId: Scalars['String'];
  role: MembershipRole;
  userId: Scalars['String'];
};

export type OrganizationMembershipListRelationFilter = {
  every?: InputMaybe<OrganizationMembershipWhereInput>;
  none?: InputMaybe<OrganizationMembershipWhereInput>;
  some?: InputMaybe<OrganizationMembershipWhereInput>;
};

export type OrganizationMembershipMaxAggregate = {
  __typename?: 'OrganizationMembershipMaxAggregate';
  id?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  role?: Maybe<MembershipRole>;
  userId?: Maybe<Scalars['String']>;
};

export type OrganizationMembershipMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrganizationMembershipMinAggregate = {
  __typename?: 'OrganizationMembershipMinAggregate';
  id?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  role?: Maybe<MembershipRole>;
  userId?: Maybe<Scalars['String']>;
};

export type OrganizationMembershipMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrganizationMembershipOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type OrganizationMembershipOrderByWithAggregationInput = {
  _count?: InputMaybe<OrganizationMembershipCountOrderByAggregateInput>;
  _max?: InputMaybe<OrganizationMembershipMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrganizationMembershipMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type OrganizationMembershipOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  organization?: InputMaybe<OrganizationOrderByWithRelationInput>;
  organizationId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum OrganizationMembershipScalarFieldEnum {
  Id = 'id',
  OrganizationId = 'organizationId',
  Role = 'role',
  UserId = 'userId'
}

export type OrganizationMembershipScalarWhereInput = {
  AND?: InputMaybe<Array<OrganizationMembershipScalarWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationMembershipScalarWhereInput>>;
  OR?: InputMaybe<Array<OrganizationMembershipScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  organizationId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumMembershipRoleFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type OrganizationMembershipScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrganizationMembershipScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrganizationMembershipScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrganizationMembershipScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  organizationId?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumMembershipRoleWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type OrganizationMembershipUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutMembershipsNestedInput>;
  role?: InputMaybe<EnumMembershipRoleFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOrganizationMembershipNestedInput>;
};

export type OrganizationMembershipUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMembershipRoleFieldUpdateOperationsInput>;
};

export type OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput = {
  data: OrganizationMembershipUpdateManyMutationInput;
  where: OrganizationMembershipScalarWhereInput;
};

export type OrganizationMembershipUpdateManyWithWhereWithoutUserInput = {
  data: OrganizationMembershipUpdateManyMutationInput;
  where: OrganizationMembershipScalarWhereInput;
};

export type OrganizationMembershipUpdateManyWithoutOrganizationNestedInput = {
  connect?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationMembershipCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<OrganizationMembershipCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<OrganizationMembershipCreateManyOrganizationInputEnvelope>;
  delete?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrganizationMembershipScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  set?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  update?: InputMaybe<Array<OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: InputMaybe<Array<OrganizationMembershipUpdateManyWithWhereWithoutOrganizationInput>>;
  upsert?: InputMaybe<Array<OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput>>;
};

export type OrganizationMembershipUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationMembershipCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<OrganizationMembershipCreateWithoutUserInput>>;
  createMany?: InputMaybe<OrganizationMembershipCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<OrganizationMembershipScalarWhereInput>>;
  disconnect?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  set?: InputMaybe<Array<OrganizationMembershipWhereUniqueInput>>;
  update?: InputMaybe<Array<OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<OrganizationMembershipUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput>>;
};

export type OrganizationMembershipUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: OrganizationMembershipUpdateWithoutOrganizationInput;
  where: OrganizationMembershipWhereUniqueInput;
};

export type OrganizationMembershipUpdateWithWhereUniqueWithoutUserInput = {
  data: OrganizationMembershipUpdateWithoutUserInput;
  where: OrganizationMembershipWhereUniqueInput;
};

export type OrganizationMembershipUpdateWithoutOrganizationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumMembershipRoleFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOrganizationMembershipNestedInput>;
};

export type OrganizationMembershipUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutMembershipsNestedInput>;
  role?: InputMaybe<EnumMembershipRoleFieldUpdateOperationsInput>;
};

export type OrganizationMembershipUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: OrganizationMembershipCreateWithoutOrganizationInput;
  update: OrganizationMembershipUpdateWithoutOrganizationInput;
  where: OrganizationMembershipWhereUniqueInput;
};

export type OrganizationMembershipUpsertWithWhereUniqueWithoutUserInput = {
  create: OrganizationMembershipCreateWithoutUserInput;
  update: OrganizationMembershipUpdateWithoutUserInput;
  where: OrganizationMembershipWhereUniqueInput;
};

export type OrganizationMembershipWhereInput = {
  AND?: InputMaybe<Array<OrganizationMembershipWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationMembershipWhereInput>>;
  OR?: InputMaybe<Array<OrganizationMembershipWhereInput>>;
  id?: InputMaybe<StringFilter>;
  organization?: InputMaybe<OrganizationRelationFilter>;
  organizationId?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumMembershipRoleFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type OrganizationMembershipWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type OrganizationMinAggregate = {
  __typename?: 'OrganizationMinAggregate';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type OrganizationMinOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OrganizationOrderByWithAggregationInput = {
  _count?: InputMaybe<OrganizationCountOrderByAggregateInput>;
  _max?: InputMaybe<OrganizationMaxOrderByAggregateInput>;
  _min?: InputMaybe<OrganizationMinOrderByAggregateInput>;
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OrganizationOrderByWithRelationInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  memberships?: InputMaybe<OrganizationMembershipOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  trainings?: InputMaybe<TrainingOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OrganizationRelationFilter = {
  is?: InputMaybe<OrganizationWhereInput>;
  isNot?: InputMaybe<OrganizationWhereInput>;
};

export enum OrganizationScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type OrganizationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<OrganizationScalarWhereWithAggregatesInput>>;
  avatarUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type OrganizationUpdateInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMembershipUpdateManyWithoutOrganizationNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  trainings?: InputMaybe<TrainingUpdateManyWithoutOrganizationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrganizationUpdateManyMutationInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrganizationUpdateOneRequiredWithoutMembershipsNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutMembershipsInput>;
  create?: InputMaybe<OrganizationCreateWithoutMembershipsInput>;
  update?: InputMaybe<OrganizationUpdateWithoutMembershipsInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutMembershipsInput>;
};

export type OrganizationUpdateOneRequiredWithoutTrainingsNestedInput = {
  connect?: InputMaybe<OrganizationWhereUniqueInput>;
  connectOrCreate?: InputMaybe<OrganizationCreateOrConnectWithoutTrainingsInput>;
  create?: InputMaybe<OrganizationCreateWithoutTrainingsInput>;
  update?: InputMaybe<OrganizationUpdateWithoutTrainingsInput>;
  upsert?: InputMaybe<OrganizationUpsertWithoutTrainingsInput>;
};

export type OrganizationUpdateWithoutMembershipsInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  trainings?: InputMaybe<TrainingUpdateManyWithoutOrganizationNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrganizationUpdateWithoutTrainingsInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  memberships?: InputMaybe<OrganizationMembershipUpdateManyWithoutOrganizationNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type OrganizationUpsertWithoutMembershipsInput = {
  create: OrganizationCreateWithoutMembershipsInput;
  update: OrganizationUpdateWithoutMembershipsInput;
};

export type OrganizationUpsertWithoutTrainingsInput = {
  create: OrganizationCreateWithoutTrainingsInput;
  update: OrganizationUpdateWithoutTrainingsInput;
};

export type OrganizationWhereInput = {
  AND?: InputMaybe<Array<OrganizationWhereInput>>;
  NOT?: InputMaybe<Array<OrganizationWhereInput>>;
  OR?: InputMaybe<Array<OrganizationWhereInput>>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  memberships?: InputMaybe<OrganizationMembershipListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  trainings?: InputMaybe<TrainingListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type OrganizationWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateAnswer: AggregateAnswer;
  aggregateOrganization: AggregateOrganization;
  aggregateOrganizationMembership: AggregateOrganizationMembership;
  aggregateQuestion: AggregateQuestion;
  aggregateTraining: AggregateTraining;
  aggregateTrainingAssignee: AggregateTrainingAssignee;
  aggregateUser: AggregateUser;
  aggregateUserQuestionResponse: AggregateUserQuestionResponse;
  answer?: Maybe<Answer>;
  answers: Array<Answer>;
  findFirstAnswer?: Maybe<Answer>;
  findFirstOrganization?: Maybe<Organization>;
  findFirstOrganizationMembership?: Maybe<OrganizationMembership>;
  findFirstQuestion?: Maybe<Question>;
  findFirstTraining?: Maybe<Training>;
  findFirstTrainingAssignee?: Maybe<TrainingAssignee>;
  findFirstUser?: Maybe<User>;
  findFirstUserQuestionResponse?: Maybe<UserQuestionResponse>;
  groupByAnswer: Array<AnswerGroupBy>;
  groupByOrganization: Array<OrganizationGroupBy>;
  groupByOrganizationMembership: Array<OrganizationMembershipGroupBy>;
  groupByQuestion: Array<QuestionGroupBy>;
  groupByTraining: Array<TrainingGroupBy>;
  groupByTrainingAssignee: Array<TrainingAssigneeGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserQuestionResponse: Array<UserQuestionResponseGroupBy>;
  organization?: Maybe<Organization>;
  organizationMembership?: Maybe<OrganizationMembership>;
  organizationMemberships: Array<OrganizationMembership>;
  organizations: Array<Organization>;
  question?: Maybe<Question>;
  questions: Array<Question>;
  training?: Maybe<Training>;
  trainingAssignee?: Maybe<TrainingAssignee>;
  trainingAssignees: Array<TrainingAssignee>;
  trainings: Array<Training>;
  user?: Maybe<User>;
  userQuestionResponse?: Maybe<UserQuestionResponse>;
  userQuestionResponses: Array<UserQuestionResponse>;
  users: Array<User>;
};


export type QueryAggregateAnswerArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AnswerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryAggregateOrganizationArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryAggregateOrganizationMembershipArgs = {
  cursor?: InputMaybe<OrganizationMembershipWhereUniqueInput>;
  orderBy?: InputMaybe<Array<OrganizationMembershipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMembershipWhereInput>;
};


export type QueryAggregateQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryAggregateTrainingArgs = {
  cursor?: InputMaybe<TrainingWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TrainingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingWhereInput>;
};


export type QueryAggregateTrainingAssigneeArgs = {
  cursor?: InputMaybe<TrainingAssigneeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TrainingAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingAssigneeWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserQuestionResponseArgs = {
  cursor?: InputMaybe<UserQuestionResponseWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserQuestionResponseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserQuestionResponseWhereInput>;
};


export type QueryAnswerArgs = {
  where: AnswerWhereUniqueInput;
};


export type QueryAnswersArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<AnswerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AnswerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryFindFirstAnswerArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<AnswerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AnswerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryFindFirstOrganizationArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryFindFirstOrganizationMembershipArgs = {
  cursor?: InputMaybe<OrganizationMembershipWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationMembershipScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationMembershipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMembershipWhereInput>;
};


export type QueryFindFirstQuestionArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryFindFirstTrainingArgs = {
  cursor?: InputMaybe<TrainingWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingWhereInput>;
};


export type QueryFindFirstTrainingAssigneeArgs = {
  cursor?: InputMaybe<TrainingAssigneeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingAssigneeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingAssigneeWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserQuestionResponseArgs = {
  cursor?: InputMaybe<UserQuestionResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserQuestionResponseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserQuestionResponseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserQuestionResponseWhereInput>;
};


export type QueryGroupByAnswerArgs = {
  by: Array<AnswerScalarFieldEnum>;
  having?: InputMaybe<AnswerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AnswerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QueryGroupByOrganizationArgs = {
  by: Array<OrganizationScalarFieldEnum>;
  having?: InputMaybe<OrganizationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryGroupByOrganizationMembershipArgs = {
  by: Array<OrganizationMembershipScalarFieldEnum>;
  having?: InputMaybe<OrganizationMembershipScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<OrganizationMembershipOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMembershipWhereInput>;
};


export type QueryGroupByQuestionArgs = {
  by: Array<QuestionScalarFieldEnum>;
  having?: InputMaybe<QuestionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryGroupByTrainingArgs = {
  by: Array<TrainingScalarFieldEnum>;
  having?: InputMaybe<TrainingScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TrainingOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingWhereInput>;
};


export type QueryGroupByTrainingAssigneeArgs = {
  by: Array<TrainingAssigneeScalarFieldEnum>;
  having?: InputMaybe<TrainingAssigneeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TrainingAssigneeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingAssigneeWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserQuestionResponseArgs = {
  by: Array<UserQuestionResponseScalarFieldEnum>;
  having?: InputMaybe<UserQuestionResponseScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserQuestionResponseOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserQuestionResponseWhereInput>;
};


export type QueryOrganizationArgs = {
  where: OrganizationWhereUniqueInput;
};


export type QueryOrganizationMembershipArgs = {
  where: OrganizationMembershipWhereUniqueInput;
};


export type QueryOrganizationMembershipsArgs = {
  cursor?: InputMaybe<OrganizationMembershipWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationMembershipScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationMembershipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMembershipWhereInput>;
};


export type QueryOrganizationsArgs = {
  cursor?: InputMaybe<OrganizationWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationWhereInput>;
};


export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput;
};


export type QueryQuestionsArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};


export type QueryTrainingArgs = {
  where: TrainingWhereUniqueInput;
};


export type QueryTrainingAssigneeArgs = {
  where: TrainingAssigneeWhereUniqueInput;
};


export type QueryTrainingAssigneesArgs = {
  cursor?: InputMaybe<TrainingAssigneeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingAssigneeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingAssigneeWhereInput>;
};


export type QueryTrainingsArgs = {
  cursor?: InputMaybe<TrainingWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserQuestionResponseArgs = {
  where: UserQuestionResponseWhereUniqueInput;
};


export type QueryUserQuestionResponsesArgs = {
  cursor?: InputMaybe<UserQuestionResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserQuestionResponseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserQuestionResponseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserQuestionResponseWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Question = {
  __typename?: 'Question';
  _count?: Maybe<QuestionCount>;
  answers: Array<Answer>;
  createdAt: Scalars['DateTime'];
  format: QuestionFormat;
  id: Scalars['String'];
  responses: Array<UserQuestionResponse>;
  title: Scalars['String'];
  training: Training;
  trainingId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


export type QuestionAnswersArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>;
  distinct?: InputMaybe<Array<AnswerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AnswerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<AnswerWhereInput>;
};


export type QuestionResponsesArgs = {
  cursor?: InputMaybe<UserQuestionResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserQuestionResponseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserQuestionResponseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserQuestionResponseWhereInput>;
};

export type QuestionCount = {
  __typename?: 'QuestionCount';
  answers: Scalars['Int'];
  responses: Scalars['Int'];
};

export type QuestionCountAggregate = {
  __typename?: 'QuestionCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  format: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
  trainingId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type QuestionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionCreateInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  format: QuestionFormat;
  id?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<UserQuestionResponseCreateNestedManyWithoutQuestionInput>;
  title: Scalars['String'];
  training: TrainingCreateNestedOneWithoutQuestionsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  format: QuestionFormat;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  trainingId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyTrainingInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  format: QuestionFormat;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateManyTrainingInputEnvelope = {
  data: Array<QuestionCreateManyTrainingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type QuestionCreateNestedManyWithoutTrainingInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutTrainingInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutTrainingInput>>;
  createMany?: InputMaybe<QuestionCreateManyTrainingInputEnvelope>;
};

export type QuestionCreateNestedOneWithoutAnswersInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<QuestionCreateWithoutAnswersInput>;
};

export type QuestionCreateNestedOneWithoutResponsesInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<QuestionCreateWithoutResponsesInput>;
};

export type QuestionCreateOrConnectWithoutAnswersInput = {
  create: QuestionCreateWithoutAnswersInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutResponsesInput = {
  create: QuestionCreateWithoutResponsesInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateOrConnectWithoutTrainingInput = {
  create: QuestionCreateWithoutTrainingInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionCreateWithoutAnswersInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  format: QuestionFormat;
  id?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<UserQuestionResponseCreateNestedManyWithoutQuestionInput>;
  title: Scalars['String'];
  training: TrainingCreateNestedOneWithoutQuestionsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateWithoutResponsesInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  format: QuestionFormat;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  training: TrainingCreateNestedOneWithoutQuestionsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type QuestionCreateWithoutTrainingInput = {
  answers?: InputMaybe<AnswerCreateNestedManyWithoutQuestionInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  format: QuestionFormat;
  id?: InputMaybe<Scalars['String']>;
  responses?: InputMaybe<UserQuestionResponseCreateNestedManyWithoutQuestionInput>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export enum QuestionFormat {
  MultipleChoice = 'MULTIPLE_CHOICE',
  TrueOrFalse = 'TRUE_OR_FALSE'
}

export type QuestionGroupBy = {
  __typename?: 'QuestionGroupBy';
  _count?: Maybe<QuestionCountAggregate>;
  _max?: Maybe<QuestionMaxAggregate>;
  _min?: Maybe<QuestionMinAggregate>;
  createdAt: Scalars['DateTime'];
  format: QuestionFormat;
  id: Scalars['String'];
  title: Scalars['String'];
  trainingId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type QuestionListRelationFilter = {
  every?: InputMaybe<QuestionWhereInput>;
  none?: InputMaybe<QuestionWhereInput>;
  some?: InputMaybe<QuestionWhereInput>;
};

export type QuestionMaxAggregate = {
  __typename?: 'QuestionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  format?: Maybe<QuestionFormat>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trainingId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionMinAggregate = {
  __typename?: 'QuestionMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  format?: Maybe<QuestionFormat>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trainingId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type QuestionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type QuestionOrderByWithAggregationInput = {
  _count?: InputMaybe<QuestionCountOrderByAggregateInput>;
  _max?: InputMaybe<QuestionMaxOrderByAggregateInput>;
  _min?: InputMaybe<QuestionMinOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionOrderByWithRelationInput = {
  answers?: InputMaybe<AnswerOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  format?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  responses?: InputMaybe<UserQuestionResponseOrderByRelationAggregateInput>;
  title?: InputMaybe<SortOrder>;
  training?: InputMaybe<TrainingOrderByWithRelationInput>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type QuestionRelationFilter = {
  is?: InputMaybe<QuestionWhereInput>;
  isNot?: InputMaybe<QuestionWhereInput>;
};

export enum QuestionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Format = 'format',
  Id = 'id',
  Title = 'title',
  TrainingId = 'trainingId',
  UpdatedAt = 'updatedAt'
}

export type QuestionScalarWhereInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  format?: InputMaybe<EnumQuestionFormatFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  trainingId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type QuestionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<QuestionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  format?: InputMaybe<EnumQuestionFormatWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  trainingId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type QuestionUpdateInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutQuestionNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  format?: InputMaybe<EnumQuestionFormatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<UserQuestionResponseUpdateManyWithoutQuestionNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  training?: InputMaybe<TrainingUpdateOneRequiredWithoutQuestionsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  format?: InputMaybe<EnumQuestionFormatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateManyWithWhereWithoutTrainingInput = {
  data: QuestionUpdateManyMutationInput;
  where: QuestionScalarWhereInput;
};

export type QuestionUpdateManyWithoutTrainingNestedInput = {
  connect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<QuestionCreateOrConnectWithoutTrainingInput>>;
  create?: InputMaybe<Array<QuestionCreateWithoutTrainingInput>>;
  createMany?: InputMaybe<QuestionCreateManyTrainingInputEnvelope>;
  delete?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<QuestionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<QuestionWhereUniqueInput>>;
  update?: InputMaybe<Array<QuestionUpdateWithWhereUniqueWithoutTrainingInput>>;
  updateMany?: InputMaybe<Array<QuestionUpdateManyWithWhereWithoutTrainingInput>>;
  upsert?: InputMaybe<Array<QuestionUpsertWithWhereUniqueWithoutTrainingInput>>;
};

export type QuestionUpdateOneRequiredWithoutAnswersNestedInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutAnswersInput>;
  create?: InputMaybe<QuestionCreateWithoutAnswersInput>;
  update?: InputMaybe<QuestionUpdateWithoutAnswersInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutAnswersInput>;
};

export type QuestionUpdateOneWithoutResponsesNestedInput = {
  connect?: InputMaybe<QuestionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<QuestionCreateOrConnectWithoutResponsesInput>;
  create?: InputMaybe<QuestionCreateWithoutResponsesInput>;
  delete?: InputMaybe<Scalars['Boolean']>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
  update?: InputMaybe<QuestionUpdateWithoutResponsesInput>;
  upsert?: InputMaybe<QuestionUpsertWithoutResponsesInput>;
};

export type QuestionUpdateWithWhereUniqueWithoutTrainingInput = {
  data: QuestionUpdateWithoutTrainingInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpdateWithoutAnswersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  format?: InputMaybe<EnumQuestionFormatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<UserQuestionResponseUpdateManyWithoutQuestionNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  training?: InputMaybe<TrainingUpdateOneRequiredWithoutQuestionsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutResponsesInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutQuestionNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  format?: InputMaybe<EnumQuestionFormatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  training?: InputMaybe<TrainingUpdateOneRequiredWithoutQuestionsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpdateWithoutTrainingInput = {
  answers?: InputMaybe<AnswerUpdateManyWithoutQuestionNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  format?: InputMaybe<EnumQuestionFormatFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  responses?: InputMaybe<UserQuestionResponseUpdateManyWithoutQuestionNestedInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type QuestionUpsertWithWhereUniqueWithoutTrainingInput = {
  create: QuestionCreateWithoutTrainingInput;
  update: QuestionUpdateWithoutTrainingInput;
  where: QuestionWhereUniqueInput;
};

export type QuestionUpsertWithoutAnswersInput = {
  create: QuestionCreateWithoutAnswersInput;
  update: QuestionUpdateWithoutAnswersInput;
};

export type QuestionUpsertWithoutResponsesInput = {
  create: QuestionCreateWithoutResponsesInput;
  update: QuestionUpdateWithoutResponsesInput;
};

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>;
  NOT?: InputMaybe<Array<QuestionWhereInput>>;
  OR?: InputMaybe<Array<QuestionWhereInput>>;
  answers?: InputMaybe<AnswerListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  format?: InputMaybe<EnumQuestionFormatFilter>;
  id?: InputMaybe<StringFilter>;
  responses?: InputMaybe<UserQuestionResponseListRelationFilter>;
  title?: InputMaybe<StringFilter>;
  training?: InputMaybe<TrainingRelationFilter>;
  trainingId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type QuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Training = {
  __typename?: 'Training';
  _count?: Maybe<TrainingCount>;
  assignees: Array<TrainingAssignee>;
  author: User;
  authorId: Scalars['String'];
  competencyThreshold: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deadline: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  organization: Organization;
  organizationId: Scalars['String'];
  questions: Array<Question>;
  updatedAt: Scalars['DateTime'];
};


export type TrainingAssigneesArgs = {
  cursor?: InputMaybe<TrainingAssigneeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingAssigneeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingAssigneeWhereInput>;
};


export type TrainingQuestionsArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>;
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QuestionWhereInput>;
};

export type TrainingAssignee = {
  __typename?: 'TrainingAssignee';
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  score?: Maybe<Scalars['Float']>;
  status: TrainingStatus;
  training: Training;
  trainingId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type TrainingAssigneeAvgAggregate = {
  __typename?: 'TrainingAssigneeAvgAggregate';
  score?: Maybe<Scalars['Float']>;
};

export type TrainingAssigneeAvgOrderByAggregateInput = {
  score?: InputMaybe<SortOrder>;
};

export type TrainingAssigneeCountAggregate = {
  __typename?: 'TrainingAssigneeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  score: Scalars['Int'];
  status: Scalars['Int'];
  trainingId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TrainingAssigneeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TrainingAssigneeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  status: TrainingStatus;
  training: TrainingCreateNestedOneWithoutAssigneesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAssignedTrainingsInput;
};

export type TrainingAssigneeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  status: TrainingStatus;
  trainingId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type TrainingAssigneeCreateManyTrainingInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  status: TrainingStatus;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type TrainingAssigneeCreateManyTrainingInputEnvelope = {
  data: Array<TrainingAssigneeCreateManyTrainingInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TrainingAssigneeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  status: TrainingStatus;
  trainingId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingAssigneeCreateManyUserInputEnvelope = {
  data: Array<TrainingAssigneeCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TrainingAssigneeCreateNestedManyWithoutTrainingInput = {
  connect?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrainingAssigneeCreateOrConnectWithoutTrainingInput>>;
  create?: InputMaybe<Array<TrainingAssigneeCreateWithoutTrainingInput>>;
  createMany?: InputMaybe<TrainingAssigneeCreateManyTrainingInputEnvelope>;
};

export type TrainingAssigneeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrainingAssigneeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TrainingAssigneeCreateWithoutUserInput>>;
  createMany?: InputMaybe<TrainingAssigneeCreateManyUserInputEnvelope>;
};

export type TrainingAssigneeCreateOrConnectWithoutTrainingInput = {
  create: TrainingAssigneeCreateWithoutTrainingInput;
  where: TrainingAssigneeWhereUniqueInput;
};

export type TrainingAssigneeCreateOrConnectWithoutUserInput = {
  create: TrainingAssigneeCreateWithoutUserInput;
  where: TrainingAssigneeWhereUniqueInput;
};

export type TrainingAssigneeCreateWithoutTrainingInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  status: TrainingStatus;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAssignedTrainingsInput;
};

export type TrainingAssigneeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  score?: InputMaybe<Scalars['Float']>;
  status: TrainingStatus;
  training: TrainingCreateNestedOneWithoutAssigneesInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingAssigneeGroupBy = {
  __typename?: 'TrainingAssigneeGroupBy';
  _avg?: Maybe<TrainingAssigneeAvgAggregate>;
  _count?: Maybe<TrainingAssigneeCountAggregate>;
  _max?: Maybe<TrainingAssigneeMaxAggregate>;
  _min?: Maybe<TrainingAssigneeMinAggregate>;
  _sum?: Maybe<TrainingAssigneeSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  score?: Maybe<Scalars['Float']>;
  status: TrainingStatus;
  trainingId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type TrainingAssigneeListRelationFilter = {
  every?: InputMaybe<TrainingAssigneeWhereInput>;
  none?: InputMaybe<TrainingAssigneeWhereInput>;
  some?: InputMaybe<TrainingAssigneeWhereInput>;
};

export type TrainingAssigneeMaxAggregate = {
  __typename?: 'TrainingAssigneeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  status?: Maybe<TrainingStatus>;
  trainingId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type TrainingAssigneeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TrainingAssigneeMinAggregate = {
  __typename?: 'TrainingAssigneeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Float']>;
  status?: Maybe<TrainingStatus>;
  trainingId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type TrainingAssigneeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TrainingAssigneeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TrainingAssigneeOrderByWithAggregationInput = {
  _avg?: InputMaybe<TrainingAssigneeAvgOrderByAggregateInput>;
  _count?: InputMaybe<TrainingAssigneeCountOrderByAggregateInput>;
  _max?: InputMaybe<TrainingAssigneeMaxOrderByAggregateInput>;
  _min?: InputMaybe<TrainingAssigneeMinOrderByAggregateInput>;
  _sum?: InputMaybe<TrainingAssigneeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TrainingAssigneeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  score?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  training?: InputMaybe<TrainingOrderByWithRelationInput>;
  trainingId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TrainingAssigneeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Score = 'score',
  Status = 'status',
  TrainingId = 'trainingId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type TrainingAssigneeScalarWhereInput = {
  AND?: InputMaybe<Array<TrainingAssigneeScalarWhereInput>>;
  NOT?: InputMaybe<Array<TrainingAssigneeScalarWhereInput>>;
  OR?: InputMaybe<Array<TrainingAssigneeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  score?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<EnumTrainingStatusFilter>;
  trainingId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TrainingAssigneeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TrainingAssigneeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TrainingAssigneeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TrainingAssigneeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  score?: InputMaybe<FloatNullableWithAggregatesFilter>;
  status?: InputMaybe<EnumTrainingStatusWithAggregatesFilter>;
  trainingId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type TrainingAssigneeSumAggregate = {
  __typename?: 'TrainingAssigneeSumAggregate';
  score?: Maybe<Scalars['Float']>;
};

export type TrainingAssigneeSumOrderByAggregateInput = {
  score?: InputMaybe<SortOrder>;
};

export type TrainingAssigneeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  score?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTrainingStatusFieldUpdateOperationsInput>;
  training?: InputMaybe<TrainingUpdateOneRequiredWithoutAssigneesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAssignedTrainingsNestedInput>;
};

export type TrainingAssigneeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  score?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTrainingStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrainingAssigneeUpdateManyWithWhereWithoutTrainingInput = {
  data: TrainingAssigneeUpdateManyMutationInput;
  where: TrainingAssigneeScalarWhereInput;
};

export type TrainingAssigneeUpdateManyWithWhereWithoutUserInput = {
  data: TrainingAssigneeUpdateManyMutationInput;
  where: TrainingAssigneeScalarWhereInput;
};

export type TrainingAssigneeUpdateManyWithoutTrainingNestedInput = {
  connect?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrainingAssigneeCreateOrConnectWithoutTrainingInput>>;
  create?: InputMaybe<Array<TrainingAssigneeCreateWithoutTrainingInput>>;
  createMany?: InputMaybe<TrainingAssigneeCreateManyTrainingInputEnvelope>;
  delete?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TrainingAssigneeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  set?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  update?: InputMaybe<Array<TrainingAssigneeUpdateWithWhereUniqueWithoutTrainingInput>>;
  updateMany?: InputMaybe<Array<TrainingAssigneeUpdateManyWithWhereWithoutTrainingInput>>;
  upsert?: InputMaybe<Array<TrainingAssigneeUpsertWithWhereUniqueWithoutTrainingInput>>;
};

export type TrainingAssigneeUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrainingAssigneeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TrainingAssigneeCreateWithoutUserInput>>;
  createMany?: InputMaybe<TrainingAssigneeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TrainingAssigneeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  set?: InputMaybe<Array<TrainingAssigneeWhereUniqueInput>>;
  update?: InputMaybe<Array<TrainingAssigneeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TrainingAssigneeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TrainingAssigneeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TrainingAssigneeUpdateWithWhereUniqueWithoutTrainingInput = {
  data: TrainingAssigneeUpdateWithoutTrainingInput;
  where: TrainingAssigneeWhereUniqueInput;
};

export type TrainingAssigneeUpdateWithWhereUniqueWithoutUserInput = {
  data: TrainingAssigneeUpdateWithoutUserInput;
  where: TrainingAssigneeWhereUniqueInput;
};

export type TrainingAssigneeUpdateWithoutTrainingInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  score?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTrainingStatusFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAssignedTrainingsNestedInput>;
};

export type TrainingAssigneeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  score?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTrainingStatusFieldUpdateOperationsInput>;
  training?: InputMaybe<TrainingUpdateOneRequiredWithoutAssigneesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrainingAssigneeUpsertWithWhereUniqueWithoutTrainingInput = {
  create: TrainingAssigneeCreateWithoutTrainingInput;
  update: TrainingAssigneeUpdateWithoutTrainingInput;
  where: TrainingAssigneeWhereUniqueInput;
};

export type TrainingAssigneeUpsertWithWhereUniqueWithoutUserInput = {
  create: TrainingAssigneeCreateWithoutUserInput;
  update: TrainingAssigneeUpdateWithoutUserInput;
  where: TrainingAssigneeWhereUniqueInput;
};

export type TrainingAssigneeWhereInput = {
  AND?: InputMaybe<Array<TrainingAssigneeWhereInput>>;
  NOT?: InputMaybe<Array<TrainingAssigneeWhereInput>>;
  OR?: InputMaybe<Array<TrainingAssigneeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  score?: InputMaybe<FloatNullableFilter>;
  status?: InputMaybe<EnumTrainingStatusFilter>;
  training?: InputMaybe<TrainingRelationFilter>;
  trainingId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type TrainingAssigneeWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type TrainingAvgAggregate = {
  __typename?: 'TrainingAvgAggregate';
  competencyThreshold?: Maybe<Scalars['Float']>;
  maxNumHours?: Maybe<Scalars['Float']>;
};

export type TrainingAvgOrderByAggregateInput = {
  competencyThreshold?: InputMaybe<SortOrder>;
  maxNumHours?: InputMaybe<SortOrder>;
};

export type TrainingCount = {
  __typename?: 'TrainingCount';
  assignees: Scalars['Int'];
  questions: Scalars['Int'];
};

export type TrainingCountAggregate = {
  __typename?: 'TrainingCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  competencyThreshold: Scalars['Int'];
  createdAt: Scalars['Int'];
  deadline: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  maxNumHours: Scalars['Int'];
  name: Scalars['Int'];
  organizationId: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type TrainingCountOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  competencyThreshold?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxNumHours?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TrainingCreateInput = {
  assignees?: InputMaybe<TrainingAssigneeCreateNestedManyWithoutTrainingInput>;
  author: UserCreateNestedOneWithoutTrainingsInput;
  competencyThreshold: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  organization: OrganizationCreateNestedOneWithoutTrainingsInput;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutTrainingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingCreateManyAuthorInput = {
  competencyThreshold: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingCreateManyAuthorInputEnvelope = {
  data: Array<TrainingCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TrainingCreateManyInput = {
  authorId: Scalars['String'];
  competencyThreshold: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingCreateManyOrganizationInput = {
  authorId: Scalars['String'];
  competencyThreshold: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingCreateManyOrganizationInputEnvelope = {
  data: Array<TrainingCreateManyOrganizationInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TrainingCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrainingCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<TrainingCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<TrainingCreateManyAuthorInputEnvelope>;
};

export type TrainingCreateNestedManyWithoutOrganizationInput = {
  connect?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrainingCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<TrainingCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<TrainingCreateManyOrganizationInputEnvelope>;
};

export type TrainingCreateNestedOneWithoutAssigneesInput = {
  connect?: InputMaybe<TrainingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TrainingCreateOrConnectWithoutAssigneesInput>;
  create?: InputMaybe<TrainingCreateWithoutAssigneesInput>;
};

export type TrainingCreateNestedOneWithoutQuestionsInput = {
  connect?: InputMaybe<TrainingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TrainingCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<TrainingCreateWithoutQuestionsInput>;
};

export type TrainingCreateOrConnectWithoutAssigneesInput = {
  create: TrainingCreateWithoutAssigneesInput;
  where: TrainingWhereUniqueInput;
};

export type TrainingCreateOrConnectWithoutAuthorInput = {
  create: TrainingCreateWithoutAuthorInput;
  where: TrainingWhereUniqueInput;
};

export type TrainingCreateOrConnectWithoutOrganizationInput = {
  create: TrainingCreateWithoutOrganizationInput;
  where: TrainingWhereUniqueInput;
};

export type TrainingCreateOrConnectWithoutQuestionsInput = {
  create: TrainingCreateWithoutQuestionsInput;
  where: TrainingWhereUniqueInput;
};

export type TrainingCreateWithoutAssigneesInput = {
  author: UserCreateNestedOneWithoutTrainingsInput;
  competencyThreshold: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  organization: OrganizationCreateNestedOneWithoutTrainingsInput;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutTrainingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingCreateWithoutAuthorInput = {
  assignees?: InputMaybe<TrainingAssigneeCreateNestedManyWithoutTrainingInput>;
  competencyThreshold: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  organization: OrganizationCreateNestedOneWithoutTrainingsInput;
  questions?: InputMaybe<QuestionCreateNestedManyWithoutTrainingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingCreateWithoutOrganizationInput = {
  assignees?: InputMaybe<TrainingAssigneeCreateNestedManyWithoutTrainingInput>;
  author: UserCreateNestedOneWithoutTrainingsInput;
  competencyThreshold: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  questions?: InputMaybe<QuestionCreateNestedManyWithoutTrainingInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingCreateWithoutQuestionsInput = {
  assignees?: InputMaybe<TrainingAssigneeCreateNestedManyWithoutTrainingInput>;
  author: UserCreateNestedOneWithoutTrainingsInput;
  competencyThreshold: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  deadline: Scalars['DateTime'];
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  organization: OrganizationCreateNestedOneWithoutTrainingsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type TrainingGroupBy = {
  __typename?: 'TrainingGroupBy';
  _avg?: Maybe<TrainingAvgAggregate>;
  _count?: Maybe<TrainingCountAggregate>;
  _max?: Maybe<TrainingMaxAggregate>;
  _min?: Maybe<TrainingMinAggregate>;
  _sum?: Maybe<TrainingSumAggregate>;
  authorId: Scalars['String'];
  competencyThreshold: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  deadline: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  maxNumHours: Scalars['Float'];
  name: Scalars['String'];
  organizationId: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TrainingListRelationFilter = {
  every?: InputMaybe<TrainingWhereInput>;
  none?: InputMaybe<TrainingWhereInput>;
  some?: InputMaybe<TrainingWhereInput>;
};

export type TrainingMaxAggregate = {
  __typename?: 'TrainingMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  competencyThreshold?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  maxNumHours?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TrainingMaxOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  competencyThreshold?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxNumHours?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TrainingMinAggregate = {
  __typename?: 'TrainingMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  competencyThreshold?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deadline?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  maxNumHours?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  organizationId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type TrainingMinOrderByAggregateInput = {
  authorId?: InputMaybe<SortOrder>;
  competencyThreshold?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxNumHours?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TrainingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TrainingOrderByWithAggregationInput = {
  _avg?: InputMaybe<TrainingAvgOrderByAggregateInput>;
  _count?: InputMaybe<TrainingCountOrderByAggregateInput>;
  _max?: InputMaybe<TrainingMaxOrderByAggregateInput>;
  _min?: InputMaybe<TrainingMinOrderByAggregateInput>;
  _sum?: InputMaybe<TrainingSumOrderByAggregateInput>;
  authorId?: InputMaybe<SortOrder>;
  competencyThreshold?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxNumHours?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organizationId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TrainingOrderByWithRelationInput = {
  assignees?: InputMaybe<TrainingAssigneeOrderByRelationAggregateInput>;
  author?: InputMaybe<UserOrderByWithRelationInput>;
  authorId?: InputMaybe<SortOrder>;
  competencyThreshold?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deadline?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxNumHours?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  organization?: InputMaybe<OrganizationOrderByWithRelationInput>;
  organizationId?: InputMaybe<SortOrder>;
  questions?: InputMaybe<QuestionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type TrainingRelationFilter = {
  is?: InputMaybe<TrainingWhereInput>;
  isNot?: InputMaybe<TrainingWhereInput>;
};

export enum TrainingScalarFieldEnum {
  AuthorId = 'authorId',
  CompetencyThreshold = 'competencyThreshold',
  CreatedAt = 'createdAt',
  Deadline = 'deadline',
  Description = 'description',
  Id = 'id',
  MaxNumHours = 'maxNumHours',
  Name = 'name',
  OrganizationId = 'organizationId',
  UpdatedAt = 'updatedAt'
}

export type TrainingScalarWhereInput = {
  AND?: InputMaybe<Array<TrainingScalarWhereInput>>;
  NOT?: InputMaybe<Array<TrainingScalarWhereInput>>;
  OR?: InputMaybe<Array<TrainingScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  competencyThreshold?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deadline?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  maxNumHours?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  organizationId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TrainingScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TrainingScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TrainingScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TrainingScalarWhereWithAggregatesInput>>;
  authorId?: InputMaybe<StringWithAggregatesFilter>;
  competencyThreshold?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  deadline?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  maxNumHours?: InputMaybe<FloatWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  organizationId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export enum TrainingStatus {
  Completed = 'COMPLETED',
  NotStarted = 'NOT_STARTED',
  Started = 'STARTED'
}

export type TrainingSumAggregate = {
  __typename?: 'TrainingSumAggregate';
  competencyThreshold?: Maybe<Scalars['Int']>;
  maxNumHours?: Maybe<Scalars['Float']>;
};

export type TrainingSumOrderByAggregateInput = {
  competencyThreshold?: InputMaybe<SortOrder>;
  maxNumHours?: InputMaybe<SortOrder>;
};

export type TrainingUpdateInput = {
  assignees?: InputMaybe<TrainingAssigneeUpdateManyWithoutTrainingNestedInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutTrainingsNestedInput>;
  competencyThreshold?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumHours?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutTrainingsNestedInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutTrainingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrainingUpdateManyMutationInput = {
  competencyThreshold?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumHours?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrainingUpdateManyWithWhereWithoutAuthorInput = {
  data: TrainingUpdateManyMutationInput;
  where: TrainingScalarWhereInput;
};

export type TrainingUpdateManyWithWhereWithoutOrganizationInput = {
  data: TrainingUpdateManyMutationInput;
  where: TrainingScalarWhereInput;
};

export type TrainingUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrainingCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<TrainingCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<TrainingCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TrainingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  set?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  update?: InputMaybe<Array<TrainingUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<TrainingUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<TrainingUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type TrainingUpdateManyWithoutOrganizationNestedInput = {
  connect?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TrainingCreateOrConnectWithoutOrganizationInput>>;
  create?: InputMaybe<Array<TrainingCreateWithoutOrganizationInput>>;
  createMany?: InputMaybe<TrainingCreateManyOrganizationInputEnvelope>;
  delete?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TrainingScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  set?: InputMaybe<Array<TrainingWhereUniqueInput>>;
  update?: InputMaybe<Array<TrainingUpdateWithWhereUniqueWithoutOrganizationInput>>;
  updateMany?: InputMaybe<Array<TrainingUpdateManyWithWhereWithoutOrganizationInput>>;
  upsert?: InputMaybe<Array<TrainingUpsertWithWhereUniqueWithoutOrganizationInput>>;
};

export type TrainingUpdateOneRequiredWithoutAssigneesNestedInput = {
  connect?: InputMaybe<TrainingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TrainingCreateOrConnectWithoutAssigneesInput>;
  create?: InputMaybe<TrainingCreateWithoutAssigneesInput>;
  update?: InputMaybe<TrainingUpdateWithoutAssigneesInput>;
  upsert?: InputMaybe<TrainingUpsertWithoutAssigneesInput>;
};

export type TrainingUpdateOneRequiredWithoutQuestionsNestedInput = {
  connect?: InputMaybe<TrainingWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TrainingCreateOrConnectWithoutQuestionsInput>;
  create?: InputMaybe<TrainingCreateWithoutQuestionsInput>;
  update?: InputMaybe<TrainingUpdateWithoutQuestionsInput>;
  upsert?: InputMaybe<TrainingUpsertWithoutQuestionsInput>;
};

export type TrainingUpdateWithWhereUniqueWithoutAuthorInput = {
  data: TrainingUpdateWithoutAuthorInput;
  where: TrainingWhereUniqueInput;
};

export type TrainingUpdateWithWhereUniqueWithoutOrganizationInput = {
  data: TrainingUpdateWithoutOrganizationInput;
  where: TrainingWhereUniqueInput;
};

export type TrainingUpdateWithoutAssigneesInput = {
  author?: InputMaybe<UserUpdateOneRequiredWithoutTrainingsNestedInput>;
  competencyThreshold?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumHours?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutTrainingsNestedInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutTrainingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrainingUpdateWithoutAuthorInput = {
  assignees?: InputMaybe<TrainingAssigneeUpdateManyWithoutTrainingNestedInput>;
  competencyThreshold?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumHours?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutTrainingsNestedInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutTrainingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrainingUpdateWithoutOrganizationInput = {
  assignees?: InputMaybe<TrainingAssigneeUpdateManyWithoutTrainingNestedInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutTrainingsNestedInput>;
  competencyThreshold?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumHours?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  questions?: InputMaybe<QuestionUpdateManyWithoutTrainingNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrainingUpdateWithoutQuestionsInput = {
  assignees?: InputMaybe<TrainingAssigneeUpdateManyWithoutTrainingNestedInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutTrainingsNestedInput>;
  competencyThreshold?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deadline?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  description?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  maxNumHours?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  organization?: InputMaybe<OrganizationUpdateOneRequiredWithoutTrainingsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TrainingUpsertWithWhereUniqueWithoutAuthorInput = {
  create: TrainingCreateWithoutAuthorInput;
  update: TrainingUpdateWithoutAuthorInput;
  where: TrainingWhereUniqueInput;
};

export type TrainingUpsertWithWhereUniqueWithoutOrganizationInput = {
  create: TrainingCreateWithoutOrganizationInput;
  update: TrainingUpdateWithoutOrganizationInput;
  where: TrainingWhereUniqueInput;
};

export type TrainingUpsertWithoutAssigneesInput = {
  create: TrainingCreateWithoutAssigneesInput;
  update: TrainingUpdateWithoutAssigneesInput;
};

export type TrainingUpsertWithoutQuestionsInput = {
  create: TrainingCreateWithoutQuestionsInput;
  update: TrainingUpdateWithoutQuestionsInput;
};

export type TrainingWhereInput = {
  AND?: InputMaybe<Array<TrainingWhereInput>>;
  NOT?: InputMaybe<Array<TrainingWhereInput>>;
  OR?: InputMaybe<Array<TrainingWhereInput>>;
  assignees?: InputMaybe<TrainingAssigneeListRelationFilter>;
  author?: InputMaybe<UserRelationFilter>;
  authorId?: InputMaybe<StringFilter>;
  competencyThreshold?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deadline?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  maxNumHours?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  organization?: InputMaybe<OrganizationRelationFilter>;
  organizationId?: InputMaybe<StringFilter>;
  questions?: InputMaybe<QuestionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type TrainingWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  assignedTrainings: Array<TrainingAssignee>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  organizationMembership: Array<OrganizationMembership>;
  trainings: Array<Training>;
  updatedAt: Scalars['DateTime'];
  userQuestionResponse: Array<UserQuestionResponse>;
};


export type UserAssignedTrainingsArgs = {
  cursor?: InputMaybe<TrainingAssigneeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingAssigneeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingAssigneeWhereInput>;
};


export type UserOrganizationMembershipArgs = {
  cursor?: InputMaybe<OrganizationMembershipWhereUniqueInput>;
  distinct?: InputMaybe<Array<OrganizationMembershipScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OrganizationMembershipOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<OrganizationMembershipWhereInput>;
};


export type UserTrainingsArgs = {
  cursor?: InputMaybe<TrainingWhereUniqueInput>;
  distinct?: InputMaybe<Array<TrainingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TrainingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TrainingWhereInput>;
};


export type UserUserQuestionResponseArgs = {
  cursor?: InputMaybe<UserQuestionResponseWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserQuestionResponseScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserQuestionResponseOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserQuestionResponseWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  assignedTrainings: Scalars['Int'];
  organizationMembership: Scalars['Int'];
  trainings: Scalars['Int'];
  userQuestionResponse: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  avatarUrl: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  firstName: Scalars['Int'];
  id: Scalars['Int'];
  lastName: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  assignedTrainings?: InputMaybe<TrainingAssigneeCreateNestedManyWithoutUserInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  organizationMembership?: InputMaybe<OrganizationMembershipCreateNestedManyWithoutUserInput>;
  trainings?: InputMaybe<TrainingCreateNestedManyWithoutAuthorInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseCreateNestedManyWithoutUserInput>;
};

export type UserCreateManyInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserCreateNestedOneWithoutAssignedTrainingsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedTrainingsInput>;
  create?: InputMaybe<UserCreateWithoutAssignedTrainingsInput>;
};

export type UserCreateNestedOneWithoutOrganizationMembershipInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOrganizationMembershipInput>;
  create?: InputMaybe<UserCreateWithoutOrganizationMembershipInput>;
};

export type UserCreateNestedOneWithoutTrainingsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTrainingsInput>;
  create?: InputMaybe<UserCreateWithoutTrainingsInput>;
};

export type UserCreateNestedOneWithoutUserQuestionResponseInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserQuestionResponseInput>;
  create?: InputMaybe<UserCreateWithoutUserQuestionResponseInput>;
};

export type UserCreateOrConnectWithoutAssignedTrainingsInput = {
  create: UserCreateWithoutAssignedTrainingsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOrganizationMembershipInput = {
  create: UserCreateWithoutOrganizationMembershipInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutTrainingsInput = {
  create: UserCreateWithoutTrainingsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutUserQuestionResponseInput = {
  create: UserCreateWithoutUserQuestionResponseInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAssignedTrainingsInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  organizationMembership?: InputMaybe<OrganizationMembershipCreateNestedManyWithoutUserInput>;
  trainings?: InputMaybe<TrainingCreateNestedManyWithoutAuthorInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutOrganizationMembershipInput = {
  assignedTrainings?: InputMaybe<TrainingAssigneeCreateNestedManyWithoutUserInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  trainings?: InputMaybe<TrainingCreateNestedManyWithoutAuthorInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutTrainingsInput = {
  assignedTrainings?: InputMaybe<TrainingAssigneeCreateNestedManyWithoutUserInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  organizationMembership?: InputMaybe<OrganizationMembershipCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseCreateNestedManyWithoutUserInput>;
};

export type UserCreateWithoutUserQuestionResponseInput = {
  assignedTrainings?: InputMaybe<TrainingAssigneeCreateNestedManyWithoutUserInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  organizationMembership?: InputMaybe<OrganizationMembershipCreateNestedManyWithoutUserInput>;
  trainings?: InputMaybe<TrainingCreateNestedManyWithoutAuthorInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  assignedTrainings?: InputMaybe<TrainingAssigneeOrderByRelationAggregateInput>;
  avatarUrl?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  organizationMembership?: InputMaybe<OrganizationMembershipOrderByRelationAggregateInput>;
  trainings?: InputMaybe<TrainingOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseOrderByRelationAggregateInput>;
};

export type UserQuestionResponse = {
  __typename?: 'UserQuestionResponse';
  answer: Answer;
  answerId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  question?: Maybe<Question>;
  questionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type UserQuestionResponseCountAggregate = {
  __typename?: 'UserQuestionResponseCountAggregate';
  _all: Scalars['Int'];
  answerId: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  questionId: Scalars['Int'];
  updatedAt: Scalars['Int'];
  userId: Scalars['Int'];
};

export type UserQuestionResponseCountOrderByAggregateInput = {
  answerId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserQuestionResponseCreateInput = {
  answer: AnswerCreateNestedOneWithoutUserQuestionResponseInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<QuestionCreateNestedOneWithoutResponsesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserQuestionResponseInput;
};

export type UserQuestionResponseCreateManyAnswerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type UserQuestionResponseCreateManyAnswerInputEnvelope = {
  data: Array<UserQuestionResponseCreateManyAnswerInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserQuestionResponseCreateManyInput = {
  answerId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type UserQuestionResponseCreateManyQuestionInput = {
  answerId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['String'];
};

export type UserQuestionResponseCreateManyQuestionInputEnvelope = {
  data: Array<UserQuestionResponseCreateManyQuestionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserQuestionResponseCreateManyUserInput = {
  answerId: Scalars['String'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserQuestionResponseCreateManyUserInputEnvelope = {
  data: Array<UserQuestionResponseCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type UserQuestionResponseCreateNestedManyWithoutAnswerInput = {
  connect?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserQuestionResponseCreateOrConnectWithoutAnswerInput>>;
  create?: InputMaybe<Array<UserQuestionResponseCreateWithoutAnswerInput>>;
  createMany?: InputMaybe<UserQuestionResponseCreateManyAnswerInputEnvelope>;
};

export type UserQuestionResponseCreateNestedManyWithoutQuestionInput = {
  connect?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserQuestionResponseCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<UserQuestionResponseCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<UserQuestionResponseCreateManyQuestionInputEnvelope>;
};

export type UserQuestionResponseCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserQuestionResponseCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserQuestionResponseCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserQuestionResponseCreateManyUserInputEnvelope>;
};

export type UserQuestionResponseCreateOrConnectWithoutAnswerInput = {
  create: UserQuestionResponseCreateWithoutAnswerInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type UserQuestionResponseCreateOrConnectWithoutQuestionInput = {
  create: UserQuestionResponseCreateWithoutQuestionInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type UserQuestionResponseCreateOrConnectWithoutUserInput = {
  create: UserQuestionResponseCreateWithoutUserInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type UserQuestionResponseCreateWithoutAnswerInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<QuestionCreateNestedOneWithoutResponsesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserQuestionResponseInput;
};

export type UserQuestionResponseCreateWithoutQuestionInput = {
  answer: AnswerCreateNestedOneWithoutUserQuestionResponseInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutUserQuestionResponseInput;
};

export type UserQuestionResponseCreateWithoutUserInput = {
  answer: AnswerCreateNestedOneWithoutUserQuestionResponseInput;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<QuestionCreateNestedOneWithoutResponsesInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type UserQuestionResponseGroupBy = {
  __typename?: 'UserQuestionResponseGroupBy';
  _count?: Maybe<UserQuestionResponseCountAggregate>;
  _max?: Maybe<UserQuestionResponseMaxAggregate>;
  _min?: Maybe<UserQuestionResponseMinAggregate>;
  answerId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  questionId?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type UserQuestionResponseListRelationFilter = {
  every?: InputMaybe<UserQuestionResponseWhereInput>;
  none?: InputMaybe<UserQuestionResponseWhereInput>;
  some?: InputMaybe<UserQuestionResponseWhereInput>;
};

export type UserQuestionResponseMaxAggregate = {
  __typename?: 'UserQuestionResponseMaxAggregate';
  answerId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserQuestionResponseMaxOrderByAggregateInput = {
  answerId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserQuestionResponseMinAggregate = {
  __typename?: 'UserQuestionResponseMinAggregate';
  answerId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['String']>;
  questionId?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['String']>;
};

export type UserQuestionResponseMinOrderByAggregateInput = {
  answerId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserQuestionResponseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserQuestionResponseOrderByWithAggregationInput = {
  _count?: InputMaybe<UserQuestionResponseCountOrderByAggregateInput>;
  _max?: InputMaybe<UserQuestionResponseMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserQuestionResponseMinOrderByAggregateInput>;
  answerId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  questionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserQuestionResponseOrderByWithRelationInput = {
  answer?: InputMaybe<AnswerOrderByWithRelationInput>;
  answerId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  question?: InputMaybe<QuestionOrderByWithRelationInput>;
  questionId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserQuestionResponseScalarFieldEnum {
  AnswerId = 'answerId',
  CreatedAt = 'createdAt',
  Id = 'id',
  QuestionId = 'questionId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserQuestionResponseScalarWhereInput = {
  AND?: InputMaybe<Array<UserQuestionResponseScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserQuestionResponseScalarWhereInput>>;
  OR?: InputMaybe<Array<UserQuestionResponseScalarWhereInput>>;
  answerId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  questionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserQuestionResponseScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserQuestionResponseScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserQuestionResponseScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserQuestionResponseScalarWhereWithAggregatesInput>>;
  answerId?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  questionId?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserQuestionResponseUpdateInput = {
  answer?: InputMaybe<AnswerUpdateOneRequiredWithoutUserQuestionResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneWithoutResponsesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserQuestionResponseNestedInput>;
};

export type UserQuestionResponseUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserQuestionResponseUpdateManyWithWhereWithoutAnswerInput = {
  data: UserQuestionResponseUpdateManyMutationInput;
  where: UserQuestionResponseScalarWhereInput;
};

export type UserQuestionResponseUpdateManyWithWhereWithoutQuestionInput = {
  data: UserQuestionResponseUpdateManyMutationInput;
  where: UserQuestionResponseScalarWhereInput;
};

export type UserQuestionResponseUpdateManyWithWhereWithoutUserInput = {
  data: UserQuestionResponseUpdateManyMutationInput;
  where: UserQuestionResponseScalarWhereInput;
};

export type UserQuestionResponseUpdateManyWithoutAnswerNestedInput = {
  connect?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserQuestionResponseCreateOrConnectWithoutAnswerInput>>;
  create?: InputMaybe<Array<UserQuestionResponseCreateWithoutAnswerInput>>;
  createMany?: InputMaybe<UserQuestionResponseCreateManyAnswerInputEnvelope>;
  delete?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserQuestionResponseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  set?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  update?: InputMaybe<Array<UserQuestionResponseUpdateWithWhereUniqueWithoutAnswerInput>>;
  updateMany?: InputMaybe<Array<UserQuestionResponseUpdateManyWithWhereWithoutAnswerInput>>;
  upsert?: InputMaybe<Array<UserQuestionResponseUpsertWithWhereUniqueWithoutAnswerInput>>;
};

export type UserQuestionResponseUpdateManyWithoutQuestionNestedInput = {
  connect?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserQuestionResponseCreateOrConnectWithoutQuestionInput>>;
  create?: InputMaybe<Array<UserQuestionResponseCreateWithoutQuestionInput>>;
  createMany?: InputMaybe<UserQuestionResponseCreateManyQuestionInputEnvelope>;
  delete?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserQuestionResponseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  set?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  update?: InputMaybe<Array<UserQuestionResponseUpdateWithWhereUniqueWithoutQuestionInput>>;
  updateMany?: InputMaybe<Array<UserQuestionResponseUpdateManyWithWhereWithoutQuestionInput>>;
  upsert?: InputMaybe<Array<UserQuestionResponseUpsertWithWhereUniqueWithoutQuestionInput>>;
};

export type UserQuestionResponseUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserQuestionResponseCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserQuestionResponseCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserQuestionResponseCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserQuestionResponseScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  set?: InputMaybe<Array<UserQuestionResponseWhereUniqueInput>>;
  update?: InputMaybe<Array<UserQuestionResponseUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserQuestionResponseUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserQuestionResponseUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserQuestionResponseUpdateWithWhereUniqueWithoutAnswerInput = {
  data: UserQuestionResponseUpdateWithoutAnswerInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type UserQuestionResponseUpdateWithWhereUniqueWithoutQuestionInput = {
  data: UserQuestionResponseUpdateWithoutQuestionInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type UserQuestionResponseUpdateWithWhereUniqueWithoutUserInput = {
  data: UserQuestionResponseUpdateWithoutUserInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type UserQuestionResponseUpdateWithoutAnswerInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneWithoutResponsesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserQuestionResponseNestedInput>;
};

export type UserQuestionResponseUpdateWithoutQuestionInput = {
  answer?: InputMaybe<AnswerUpdateOneRequiredWithoutUserQuestionResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutUserQuestionResponseNestedInput>;
};

export type UserQuestionResponseUpdateWithoutUserInput = {
  answer?: InputMaybe<AnswerUpdateOneRequiredWithoutUserQuestionResponseNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  question?: InputMaybe<QuestionUpdateOneWithoutResponsesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserQuestionResponseUpsertWithWhereUniqueWithoutAnswerInput = {
  create: UserQuestionResponseCreateWithoutAnswerInput;
  update: UserQuestionResponseUpdateWithoutAnswerInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type UserQuestionResponseUpsertWithWhereUniqueWithoutQuestionInput = {
  create: UserQuestionResponseCreateWithoutQuestionInput;
  update: UserQuestionResponseUpdateWithoutQuestionInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type UserQuestionResponseUpsertWithWhereUniqueWithoutUserInput = {
  create: UserQuestionResponseCreateWithoutUserInput;
  update: UserQuestionResponseUpdateWithoutUserInput;
  where: UserQuestionResponseWhereUniqueInput;
};

export type UserQuestionResponseWhereInput = {
  AND?: InputMaybe<Array<UserQuestionResponseWhereInput>>;
  NOT?: InputMaybe<Array<UserQuestionResponseWhereInput>>;
  OR?: InputMaybe<Array<UserQuestionResponseWhereInput>>;
  answer?: InputMaybe<AnswerRelationFilter>;
  answerId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  question?: InputMaybe<QuestionRelationFilter>;
  questionId?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type UserQuestionResponseWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AvatarUrl = 'avatarUrl',
  CreatedAt = 'createdAt',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  avatarUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type UserUpdateInput = {
  assignedTrainings?: InputMaybe<TrainingAssigneeUpdateManyWithoutUserNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  organizationMembership?: InputMaybe<OrganizationMembershipUpdateManyWithoutUserNestedInput>;
  trainings?: InputMaybe<TrainingUpdateManyWithoutAuthorNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateManyMutationInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAssignedTrainingsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedTrainingsInput>;
  create?: InputMaybe<UserCreateWithoutAssignedTrainingsInput>;
  update?: InputMaybe<UserUpdateWithoutAssignedTrainingsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAssignedTrainingsInput>;
};

export type UserUpdateOneRequiredWithoutOrganizationMembershipNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOrganizationMembershipInput>;
  create?: InputMaybe<UserCreateWithoutOrganizationMembershipInput>;
  update?: InputMaybe<UserUpdateWithoutOrganizationMembershipInput>;
  upsert?: InputMaybe<UserUpsertWithoutOrganizationMembershipInput>;
};

export type UserUpdateOneRequiredWithoutTrainingsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutTrainingsInput>;
  create?: InputMaybe<UserCreateWithoutTrainingsInput>;
  update?: InputMaybe<UserUpdateWithoutTrainingsInput>;
  upsert?: InputMaybe<UserUpsertWithoutTrainingsInput>;
};

export type UserUpdateOneRequiredWithoutUserQuestionResponseNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutUserQuestionResponseInput>;
  create?: InputMaybe<UserCreateWithoutUserQuestionResponseInput>;
  update?: InputMaybe<UserUpdateWithoutUserQuestionResponseInput>;
  upsert?: InputMaybe<UserUpsertWithoutUserQuestionResponseInput>;
};

export type UserUpdateWithoutAssignedTrainingsInput = {
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  organizationMembership?: InputMaybe<OrganizationMembershipUpdateManyWithoutUserNestedInput>;
  trainings?: InputMaybe<TrainingUpdateManyWithoutAuthorNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutOrganizationMembershipInput = {
  assignedTrainings?: InputMaybe<TrainingAssigneeUpdateManyWithoutUserNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  trainings?: InputMaybe<TrainingUpdateManyWithoutAuthorNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutTrainingsInput = {
  assignedTrainings?: InputMaybe<TrainingAssigneeUpdateManyWithoutUserNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  organizationMembership?: InputMaybe<OrganizationMembershipUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseUpdateManyWithoutUserNestedInput>;
};

export type UserUpdateWithoutUserQuestionResponseInput = {
  assignedTrainings?: InputMaybe<TrainingAssigneeUpdateManyWithoutUserNestedInput>;
  avatarUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<StringFieldUpdateOperationsInput>;
  organizationMembership?: InputMaybe<OrganizationMembershipUpdateManyWithoutUserNestedInput>;
  trainings?: InputMaybe<TrainingUpdateManyWithoutAuthorNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAssignedTrainingsInput = {
  create: UserCreateWithoutAssignedTrainingsInput;
  update: UserUpdateWithoutAssignedTrainingsInput;
};

export type UserUpsertWithoutOrganizationMembershipInput = {
  create: UserCreateWithoutOrganizationMembershipInput;
  update: UserUpdateWithoutOrganizationMembershipInput;
};

export type UserUpsertWithoutTrainingsInput = {
  create: UserCreateWithoutTrainingsInput;
  update: UserUpdateWithoutTrainingsInput;
};

export type UserUpsertWithoutUserQuestionResponseInput = {
  create: UserCreateWithoutUserQuestionResponseInput;
  update: UserUpdateWithoutUserQuestionResponseInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignedTrainings?: InputMaybe<TrainingAssigneeListRelationFilter>;
  avatarUrl?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  organizationMembership?: InputMaybe<OrganizationMembershipListRelationFilter>;
  trainings?: InputMaybe<TrainingListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userQuestionResponse?: InputMaybe<UserQuestionResponseListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

export type CreateTrainingMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  competencyThreshold: Scalars['Int'];
  maxNumHours: Scalars['Float'];
  deadline: Scalars['DateTime'];
  author: UserCreateNestedOneWithoutTrainingsInput;
  organization: OrganizationCreateNestedOneWithoutTrainingsInput;
}>;


export type CreateTrainingMutation = { __typename?: 'Mutation', createOneTraining: { __typename?: 'Training', id: string, name: string, description?: string | null, competencyThreshold: number, maxNumHours: number } };

export type AppQueryVariables = Exact<{ [key: string]: never; }>;


export type AppQuery = { __typename?: 'Query', trainings: Array<{ __typename?: 'Training', id: string, name: string, description?: string | null, deadline: any }> };


export const CreateTrainingDocument = gql`
    mutation CreateTraining($name: String!, $description: String!, $competencyThreshold: Int!, $maxNumHours: Float!, $deadline: DateTime!, $author: UserCreateNestedOneWithoutTrainingsInput!, $organization: OrganizationCreateNestedOneWithoutTrainingsInput!) {
  createOneTraining(
    data: {name: $name, description: $description, competencyThreshold: $competencyThreshold, maxNumHours: $maxNumHours, deadline: $deadline, author: $author, organization: $organization}
  ) {
    id
    name
    description
    competencyThreshold
    maxNumHours
  }
}
    `;
export type CreateTrainingMutationFn = Apollo.MutationFunction<CreateTrainingMutation, CreateTrainingMutationVariables>;

/**
 * __useCreateTrainingMutation__
 *
 * To run a mutation, you first call `useCreateTrainingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTrainingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTrainingMutation, { data, loading, error }] = useCreateTrainingMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      competencyThreshold: // value for 'competencyThreshold'
 *      maxNumHours: // value for 'maxNumHours'
 *      deadline: // value for 'deadline'
 *      author: // value for 'author'
 *      organization: // value for 'organization'
 *   },
 * });
 */
export function useCreateTrainingMutation(baseOptions?: Apollo.MutationHookOptions<CreateTrainingMutation, CreateTrainingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTrainingMutation, CreateTrainingMutationVariables>(CreateTrainingDocument, options);
      }
export type CreateTrainingMutationHookResult = ReturnType<typeof useCreateTrainingMutation>;
export type CreateTrainingMutationResult = Apollo.MutationResult<CreateTrainingMutation>;
export type CreateTrainingMutationOptions = Apollo.BaseMutationOptions<CreateTrainingMutation, CreateTrainingMutationVariables>;
export const AppDocument = gql`
    query App {
  trainings(orderBy: {name: asc}) {
    id
    name
    description
    deadline
  }
}
    `;

/**
 * __useAppQuery__
 *
 * To run a query within a React component, call `useAppQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppQuery({
 *   variables: {
 *   },
 * });
 */
export function useAppQuery(baseOptions?: Apollo.QueryHookOptions<AppQuery, AppQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AppQuery, AppQueryVariables>(AppDocument, options);
      }
export function useAppLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AppQuery, AppQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AppQuery, AppQueryVariables>(AppDocument, options);
        }
export type AppQueryHookResult = ReturnType<typeof useAppQuery>;
export type AppLazyQueryHookResult = ReturnType<typeof useAppLazyQuery>;
export type AppQueryResult = Apollo.QueryResult<AppQuery, AppQueryVariables>;