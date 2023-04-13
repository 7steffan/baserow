# Generated by Django 3.2.18 on 2023-03-06 16:39

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("core", "0043_settings_track_group_usage"),
    ]

    operations = [
        migrations.AddField(
            model_name="group",
            name="seats_taken",
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name="group",
            name="seats_taken_updated_at",
            field=models.DateTimeField(null=True),
        ),
    ]
