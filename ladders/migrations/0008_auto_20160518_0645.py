# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-05-18 11:45
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('ladders', '0007_auto_20160515_1343'),
    ]

    operations = [
        migrations.AddField(
            model_name='user_ladder',
            name='last_conqueror',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='last_conqueror', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='user_ladder',
            name='weekly_challenge_completed',
            field=models.BooleanField(default=False),
        ),
    ]