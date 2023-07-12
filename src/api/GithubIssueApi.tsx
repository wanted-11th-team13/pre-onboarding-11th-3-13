import axios, { AxiosInstance } from 'axios';
import {
  IssueOriginProps,
  IssueProps,
  LabelOrginProps,
  LabelProps,
} from '../types/IssueListTypes';
import { IssueDetailProps } from '../types/IssueDetailTyes';

const GITHUB_API_KEY = import.meta.env.VITE_GITHUB_API_KEY;
const BASE_URL = 'https://api.github.com/repos';
const params = {
  state: 'open',
  sort: 'comments',
  direction: 'desc',
};
const headers = {
  Accept: 'application/vnd.github.v3+json',
  Authorization: `Bearer ${GITHUB_API_KEY}`,
  'X-GitHub-Api-Version': '2022-11-28',
};

class GithubAPIManager {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: `${BASE_URL}`,
      params,
      headers,
    });
  }
  async getIssueList(owner: string, repo: string) {
    try {
      const response = await this.axiosInstance.get(`/${owner}/${repo}/issues`);
      const issues = response.data.map(
        (issue: IssueOriginProps): IssueProps => ({
          issueNumber: issue.number,
          title: issue.title,
          author: issue.user.login,
          createdAt: issue.created_at,
          commentCount: issue.comments,
          labels: issue.labels.map(
            (label: LabelOrginProps): LabelProps => ({
              id: label.id,
              name: label.name,
              color: label.color,
            })
          ),
        })
      );

      return issues;
    } catch (error) {
      console.log(error);
    }
  }

  async getIssueDetail(owner: string, repo: string, issueId: string) {
    try {
      const response = await this.axiosInstance.get(
        `/${owner}/${repo}/issues/${issueId}`
      );

      const issueDetailData = response.data;

      const issueDetail: IssueDetailProps = {
        id: issueDetailData.id,
        number: issueDetailData.number,
        title: issueDetailData.title,
        comments: issueDetailData.comments,
        createdAt: issueDetailData.created_at,
        body: issueDetailData.body,
        userId: issueDetailData.user.id,
        author: issueDetailData.user.login,
        profileUrl: issueDetailData.user.avatar_url,
        profileLink: issueDetailData.user.html_url,
      };

      return issueDetail;
    } catch (error) {
      console.log(error);
    }
  }
}

export const githubApi = new GithubAPIManager();
