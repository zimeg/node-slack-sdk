import { LocaleAware, TokenOverridable } from './common';

// https://api.slack.com/methods/rtm.connect
export interface RTMConnectArguments extends TokenOverridable {
  /**
   * @description Batch presence deliveries via subscription. Enabling changes the shape of `presence_change` events.
   * @see {@link https://api.slack.com/docs/presence-and-status#batching batch presence}.
   */
  batch_presence_aware?: boolean;
  /**
   * @description Only deliver presence events when requested by subscription.
   * @see {@link Only deliver presence events when requested by subscription. presence subscriptions}.
   */
  presence_sub?: boolean;
}
// https://api.slack.com/methods/rtm.start
export interface RTMStartArguments extends RTMConnectArguments, LocaleAware {
  /** @description Returns MPIMs to the client in the API response. */
  mpim_aware?: boolean;
  /**
   * @description Exclude latest timestamps for channels, groups, mpims, and ims.
   * Automatically sets `no_unreads` to `true`.
   */
  no_latest?: boolean;
  /** @description Skip unread counts for each channel (improves performance). */
  no_unreads?: boolean;
  /** @description Return timestamp only for latest message object of each channel (improves performance). */
  simple_latest?: boolean;
}
