import axios, { AxiosInstance } from 'axios';
import {
  IssueOriginProps,
  IssueProps,
  LabelOrginProps,
  LabelProps,
} from '../types/IssueListTypes';

const GITHUB_API_KEY = process.env.VITE_GITHUB_API_KEY;
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

  async getIsuueList() {
    try {
      const response = await this.axiosInstance.get('/facebook/react/issues');
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
}

export const githubApi = new GithubAPIManager();
