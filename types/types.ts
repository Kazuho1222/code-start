export interface Task {
  id: string; // 案件ID
  title: string; // 案件タイトル
  description: string; // 案件詳細
  skill?: string[]; // 希望スキル
  deadline?: Date; // 納期
  reward?: number; // 報酬金額
  tags?: string[]; // タグ
  authorId: string; // 投稿者ID（ユーザー認証情報と紐づく）
  createAt: Date; // 投稿日時
  updatedAt: Date; // 更新日時
}
